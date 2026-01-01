import { describe, expect, it } from "vitest";

import {
  getRootMarginForThreshold,
  isTopWithinThreshold,
  normalizeVisibilityThreshold,
} from "./usePopInOnScroll";

describe("usePopInOnScroll helpers", () => {
  it("normalizeVisibilityThreshold clamps to [0, 1] and falls back", () => {
    expect(normalizeVisibilityThreshold(0.85)).toBe(0.85);
    expect(normalizeVisibilityThreshold(2)).toBe(1);
    expect(normalizeVisibilityThreshold(-1)).toBe(0);
    expect(normalizeVisibilityThreshold(Number.NaN)).toBe(0.85);
  });

  it("getRootMarginForThreshold computes expected bottom margin", () => {
    expect(getRootMarginForThreshold(0.85)).toBe("0px 0px -15% 0px");
    expect(getRootMarginForThreshold(1)).toBe("0px 0px 0% 0px");
    expect(getRootMarginForThreshold(0)).toBe("0px 0px -100% 0px");
  });

  it("isTopWithinThreshold matches the hook's < comparison", () => {
    const threshold = 0.85;
    const innerHeight = 1000;

    expect(isTopWithinThreshold(849, innerHeight, threshold)).toBe(true);
    expect(isTopWithinThreshold(850, innerHeight, threshold)).toBe(false);
    expect(isTopWithinThreshold(-10, innerHeight, threshold)).toBe(true);
  });
});
