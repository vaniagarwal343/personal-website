'use client';

import * as React from 'react';

const ADVANCE_MS = 6000;
const PICKER_HOLD_MS = 20000;

function subscribeMedia(query: string) {
  return (cb: () => void) => {
    const m = window.matchMedia(query);
    m.addEventListener('change', cb);
    return () => m.removeEventListener('change', cb);
  };
}

export function useMedia(query: string): boolean {
  const subscribe = React.useMemo(() => subscribeMedia(query), [query]);
  return React.useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

function subscribeVisibility(cb: () => void) {
  document.addEventListener('visibilitychange', cb);
  return () => document.removeEventListener('visibilitychange', cb);
}

export function useDocumentHidden(): boolean {
  return React.useSyncExternalStore(
    subscribeVisibility,
    () => document.hidden,
    () => false
  );
}

/** Scroll steps for n plates: one per plate, at least two, at most six. */
export function stepsFor(plateCount: number): number {
  return Math.min(6, Math.max(2, plateCount));
}

/**
 * Which step of the tall track the sticky spread is at. Only runs when
 * `enabled` (desktop layout); otherwise stays at 0.
 */
export function useScrollStep(
  trackRef: React.RefObject<HTMLElement | null>,
  steps: number,
  enabled: boolean,
  onStep: (step: number) => void
): number {
  const [step, setStep] = React.useState(0);
  const last = React.useRef(0);
  const onStepRef = React.useRef(onStep);
  React.useEffect(() => {
    onStepRef.current = onStep;
  });

  React.useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const el = trackRef.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      if (range <= 4) return;
      const progress = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / range));
      const next = Math.round(progress * (steps - 1));
      if (next !== last.current) {
        last.current = next;
        setStep(next);
        onStepRef.current(next);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [trackRef, steps, enabled]);

  return enabled ? step : 0;
}

type Options = {
  count: number;
  steps: number;
  paused: boolean;
  reducedMotion: boolean;
};

/**
 * The active research.site plate. Three sources, highest priority first:
 * 1. the picker (and for 20 s afterwards nothing else may change it),
 * 2. scroll steps,
 * 3. the 6 s timer (off with one plate, under reduced motion, or while paused).
 */
export function useActivePlate({ count, steps, paused, reducedMotion }: Options) {
  const [active, setActive] = React.useState(0);
  const holdUntil = React.useRef(0);
  const [holdVersion, setHoldVersion] = React.useState(0);

  // Scroll: called by useScrollStep when the step changes. Ignored during a picker hold.
  const fromScroll = React.useCallback(
    (step: number) => {
      if (Date.now() < holdUntil.current) return;
      const plate = steps > 1 ? Math.round((step * (count - 1)) / (steps - 1)) : 0;
      setActive(Math.min(count - 1, Math.max(0, plate)));
    },
    [count, steps]
  );

  // Timer: restarts whenever the plate changes or a hold begins.
  React.useEffect(() => {
    if (count < 2 || paused || reducedMotion) return;
    const wait = Math.max(ADVANCE_MS, holdUntil.current - Date.now() + ADVANCE_MS);
    const id = window.setTimeout(() => setActive((a) => (a + 1) % count), wait);
    return () => window.clearTimeout(id);
  }, [active, count, paused, reducedMotion, holdVersion]);

  const pick = React.useCallback((i: number) => {
    holdUntil.current = Date.now() + PICKER_HOLD_MS;
    setHoldVersion((v) => v + 1);
    setActive(i);
  }, []);

  return { active: Math.min(active, Math.max(0, count - 1)), pick, fromScroll };
}
