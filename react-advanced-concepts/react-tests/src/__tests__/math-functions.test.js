import { sum, subtract, multiply, divide } from "utils/math-functions";

describe("Math functions", () => {
  it("sums correctly 2 values", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, -1)).toBe(-1);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(1.5, -0.5)).toBe(1);
  });

  it("subtracts correctly 2 values", () => {
    expect(subtract(1, 1)).toBe(0);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(0, -1)).toBe(1);
    expect(subtract(-1, -1)).toBe(0);
    expect(subtract(1.5, -0.5)).toBe(2);
  });

  it("multiplies correctly 2 values", () => {
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(0, -1)).toBe(0);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(1.5, -0.5)).toBe(-0.75);
  });

  it("divides correctly 2 values", () => {
    expect(divide(1, 1)).toBe(1);
    expect(divide(0, 1)).toBe(0);
    expect(divide(0, -1)).toBe(0);
    expect(divide(-1, -1)).toBe(1);
    expect(divide(1.5, -0.5)).toBe(-3);
    expect(()=>divide()).toThrowError("You can't divide by 0!");
  });
});
