// Easing functions for animations

export function easeInQuad(t) {
  return t * t;
}

export function easeOutQuad(t) {
  return t * (2 - t);
}

export function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function easeInCubic(t) {
  return t * t * t;
}

export function easeOutCubic(t) {
  return (--t) * t * t + 1;
}

export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

export function easeInElastic(t) {
  if (t === 0) return 0;
  if (t === 1) return 1;
  const p = 0.3;
  const s = p / 4;
  return -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - s) * (2 * Math.PI)) / p));
}

export function easeOutElastic(t) {
  if (t === 0) return 0;
  if (t === 1) return 1;
  const p = 0.3;
  const s = p / 4;
  return Math.pow(2, -10 * t) * Math.sin(((t - s) * (2 * Math.PI)) / p) + 1;
}

export function easeOutBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

export function easeInBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return c3 * t * t * t - c1 * t * t;
}

export function easeOutBounce(t) {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (t < 1 / d1) return n1 * t * t;
  if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
  if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
  return n1 * (t -= 2.625 / d1) * t + 0.984375;
}

export function easeInOutSine(t) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

export function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function easeInExpo(t) {
  return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
}

// Tween helper — calls onUpdate each frame, calls onComplete when done
export class Tween {
  constructor({ duration = 1000, easing = easeInOutQuad, onUpdate, onComplete }) {
    this.duration = duration;
    this.easing = easing;
    this.onUpdate = onUpdate || (() => {});
    this.onComplete = onComplete || (() => {});
    this.startTime = null;
    this.finished = false;
  }

  update(now) {
    if (this.finished) return true;
    if (this.startTime === null) this.startTime = now;
    const elapsed = now - this.startTime;
    const t = Math.min(elapsed / this.duration, 1);
    const easedT = this.easing(t);
    this.onUpdate(easedT, t);
    if (t >= 1) {
      this.finished = true;
      this.onComplete();
      return true;
    }
    return false;
  }
}

export class TweenManager {
  constructor() {
    this.tweens = [];
  }

  add(tween) {
    this.tweens.push(tween);
    return tween;
  }

  update(now) {
    this.tweens = this.tweens.filter((tween) => !tween.update(now));
  }

  clear() {
    this.tweens = [];
  }
}
