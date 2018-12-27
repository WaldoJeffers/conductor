const or = require("../src/or");

describe("or", () => {
  it("should return the logical or between two expressions", () => {
    expect(or(true, false)()).toBe(true);
    expect(or(n => n % 2 === 0, n => n % 1 === 0)(3)).toBe(true);
    expect(or(false, n => n % 2 === 0)(3)).toBe(false);
    expect(or(1, 1)()).toBe(true); // truthy
    expect(or(0, 0)()).toBe(false); // falsy
    expect(or(1, 0)()).toBe(true); // truthy
  });
});
