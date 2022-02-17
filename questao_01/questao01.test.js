const stair = require("./questao01");

test("String 'abcdef' nothing is printed", () => {
  expect(stair("abcdef")).toBe("");
});

test("String 0 nothing is printed", () => {
  expect(stair(0)).toBe("");
});

test("-3 nothing is printed", () => {
  expect(stair(-3)).toBe("");
});

test("6.5 decimals are ignored and 6 steps are printed", () => {
  expect(stair(6.5)).toBe("     *\n    **\n   ***\n  ****\n *****\n******\n");
});

test("1 prints 1 step", () => {
  expect(stair(1)).toBe("*\n");
});

test("6 prints a stair with 6 steps", () => {
  expect(stair(6)).toBe("     *\n    **\n   ***\n  ****\n *****\n******\n");
});
