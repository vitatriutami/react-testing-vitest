import { sum } from "./math";
import { expect, test } from "vitest";

test("Testing the sum func should works properly", () => {
  expect(sum(1, 2)).toBe(3)
})