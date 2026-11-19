"""Procedural painted-paper washes for the portfolio mockup.

Each wash is reproducible from its seed, so the colophon can print the
seed as the texture's provenance.  Usage: python gen_textures.py OUT_DIR
"""
import sys
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

W, H = 1200, 800


def vnoise(h, w, cell, rng):
    """Isotropic smooth noise: blurred white noise, built small and upsampled.

    A blurred field has no lattice, so the washes carry no axis-aligned
    blocks the way upsampled value noise does.
    """
    sigma = float(cell) / 3.0
    f = 8 if sigma >= 24 else (4 if sigma >= 8 else 1)
    pad = 24
    lh, lw = h // f + 2 * pad, w // f + 2 * pad
    n = rng.standard_normal((lh, lw)).astype(np.float32)
    n = ndi.gaussian_filter(n, sigma / f, mode="reflect")
    if f > 1:
        n = ndi.zoom(n, f, order=3, mode="reflect")
    oy, ox = pad * f, pad * f
    return n[oy:oy + h, ox:ox + w]


def fbm(h, w, base, octaves, rng, gain=0.5):
    out = np.zeros((h, w), np.float32)
    amp, tot, cell = 1.0, 0.0, float(base)
    for _ in range(octaves):
        out += amp * vnoise(h, w, max(cell, 1.5), rng)
        tot += amp
        amp *= gain
        cell /= 2.0
    out /= tot
    lo, hi = np.percentile(out, [1, 99])
    return np.clip((out - lo) / (hi - lo + 1e-6), 0, 1)


def warp(field, rng, amount, base=260):
    h, w = field.shape
    wx = fbm(h, w, base, 3, rng) - 0.5
    wy = fbm(h, w, base, 3, rng) - 0.5
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    return ndi.map_coordinates(field, [yy + wy * amount, xx + wx * amount],
                               order=1, mode="reflect")


def smooth(x, a, b):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


def wash(seed, c1, c2, paper, dark=False, strength=1.0):
    rng = np.random.default_rng(seed)
    # where the pigment pooled: broad, slow variation, pushed around like wet paint
    d = warp(fbm(H, W, 980, 3, rng, gain=0.42), rng, 130, base=620)
    d = smooth(d, 0.08, 0.95)
    # tide lines: thin contours where a wet edge dried
    b = warp(fbm(H, W, 760, 2, rng, gain=0.35), rng, 90, base=620)
    tide = np.exp(-((b - 0.52) / 0.020) ** 2) + 0.4 * np.exp(-((b - 0.27) / 0.016) ** 2)
    tide *= smooth(fbm(H, W, 520, 2, rng), 0.35, 0.8)
    # granulation: pigment settling into the tooth of the paper
    grain = ndi.gaussian_filter(rng.random((H, W)).astype(np.float32), 0.7)
    grain = (grain - grain.mean()) / (grain.std() + 1e-6)
    tooth = fbm(H, W, 7, 2, rng) - 0.5
    # which of the two pigments dominates where
    m = warp(fbm(H, W, 1200, 2, rng, gain=0.4), rng, 150, base=700)[..., None]

    dens = 0.30 + 0.50 * d + 0.10 * tide
    dens = dens * (1 + (0.085 if dark else 0.055) * grain) * strength
    dens = np.clip(dens, 0, 1)[..., None]

    c1 = np.array(c1, np.float32) / 255
    c2 = np.array(c2, np.float32) / 255
    pig = c1 * (1 - m) + c2 * m
    paper = np.array(paper, np.float32) / 255
    if dark:
        rgb = paper + dens * (pig - paper)
        rgb *= (1 + 0.10 * tooth[..., None])
    else:
        rgb = paper * (1 - dens * (1 - pig))
        rgb *= (1 + 0.045 * tooth[..., None])
    return Image.fromarray((np.clip(rgb, 0, 1) * 255).astype(np.uint8))


WASHES = {
    # name: (seed, light pigments, dark pigments)
    "indigo": (1126, ((70, 100, 158), (120, 112, 172)), ((52, 78, 138), (88, 80, 150))),
    "ochre":  (2207, ((204, 148, 58), (196, 116, 70)), ((150, 104, 44), (136, 78, 46))),
    "stone":  (3319, ((104, 116, 108), (146, 138, 120)), ((74, 86, 80), (104, 98, 84))),
}

if __name__ == "__main__":
    out = sys.argv[1]
    for name, (seed, light, dark) in WASHES.items():
        wash(seed, *light, paper=(255, 255, 255)).save(
            f"{out}/{name}-light.webp", quality=88, method=6)
        wash(seed, *dark, paper=(14, 14, 13), dark=True, strength=0.92).save(
            f"{out}/{name}-dark.webp", quality=93, method=6)
        print(name, seed)
