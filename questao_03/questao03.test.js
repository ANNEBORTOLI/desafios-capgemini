const anagramsCounter = require("./questao03");

test("Empty string should be 0", () => {
  expect(anagramsCounter("")).toBe(0);
});

test("String 'a' should be 0", () => {
  expect(anagramsCounter("a")).toBe(0);
});

test("4 whitespaces string should be 6", () => {
  expect(anagramsCounter("    ")).toBe(6);
});

test("String 'bbbb' should be 6", () => {
  expect(anagramsCounter("bbbb")).toBe(6);
});

test("String 'abcdef' should be 0", () => {
  expect(anagramsCounter("abcdef")).toBe(0);
});

test("String 'mom' should be 2", () => {
  expect(anagramsCounter("mom")).toBe(2);
});

test("String 'ovvovoovovvo' should be 55", () => {
  expect(anagramsCounter("ovvovoovovvo")).toBe(55);
});
