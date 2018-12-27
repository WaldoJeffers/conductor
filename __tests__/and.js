const and = require("../src/and");

describe("and", () => {
  it("should return the logical and between two expressions", () => {
    expect(and(true, false)()).toBe(false);
    expect(and(false, n => n % 2 === 0)(3)).toBe(false);
    expect(and(true, n => n % 2 === 0)(4)).toBe(true);
    expect(and(1, 1)()).toBe(true); // truthy
    expect(and(1, 0)()).toBe(false); // falsy
  });
});
