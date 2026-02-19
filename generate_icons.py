#!/usr/bin/env python3
"""Generate VA monogram icons for the portfolio site."""

from PIL import Image, ImageDraw, ImageFont
import struct
import os

OUTPUT_DIR = "/Users/vaniagarwal/Desktop/personal-website/public"
BG_COLOR = (26, 26, 26)  # #1A1A1A
TEXT_COLOR = (255, 255, 255)  # white


def create_monogram(size):
    """Create a VA monogram image at the given size."""
    img = Image.new("RGBA", (size, size), BG_COLOR + (255,))
    draw = ImageDraw.Draw(img)

    font = None
    font_size = int(size * 0.42)

    font_paths = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial Bold.ttf",
        "/System/Library/Fonts/SFNS.ttf",
        "/System/Library/Fonts/SFCompact.ttf",
    ]

    for fp in font_paths:
        if os.path.exists(fp):
            try:
                font = ImageFont.truetype(fp, font_size)
                print(f"  Using font: {fp}")
                break
            except Exception:
                continue

    if font is None:
        font = ImageFont.load_default()
        print("  Warning: using default bitmap font")

    text = "VA"

    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]

    x = (size - text_w) / 2 - bbox[0]
    y = (size - text_h) / 2 - bbox[1] - (size * 0.02)

    draw.text((x, y), text, fill=TEXT_COLOR, font=font)
    return img


def create_ico(img, path):
    """Create a .ico file from a PIL Image."""
    size = 16
    img = img.resize((size, size), Image.LANCZOS)

    pixels = img.tobytes()

    bmp_header = struct.pack(
        "<IiiHHIIiiII",
        40, size, size * 2, 1, 32, 0, 0, 0, 0, 0, 0,
    )

    bmp_data = bytearray()
    for row in range(size - 1, -1, -1):
        for col in range(size):
            offset = (row * size + col) * 4
            r, g, b, a = pixels[offset:offset + 4]
            bmp_data.extend([b, g, r, a])

    row_bytes = (size + 31) // 32 * 4
    and_mask = bytearray(b"\x00" * row_bytes * size)

    image_data = bmp_header + bytes(bmp_data) + bytes(and_mask)

    ico_header = struct.pack("<HHH", 0, 1, 1)
    data_offset = 6 + 16
    ico_entry = struct.pack(
        "<BBBBHHII",
        size, size, 0, 0, 1, 32, len(image_data), data_offset,
    )

    with open(path, "wb") as f:
        f.write(ico_header + ico_entry + image_data)


def main():
    print("Generating VA monogram icons...")

    img_512 = create_monogram(512)
    img_512.save(os.path.join(OUTPUT_DIR, "logo512.png"), "PNG")
    print("  -> logo512.png (512x512)")

    img_192 = create_monogram(192)
    img_192.save(os.path.join(OUTPUT_DIR, "logo192.png"), "PNG")
    print("  -> logo192.png (192x192)")

    img_16 = create_monogram(16)
    create_ico(img_16, os.path.join(OUTPUT_DIR, "favicon.ico"))
    print("  -> favicon.ico (16x16)")

    print("Done!")


if __name__ == "__main__":
    main()
