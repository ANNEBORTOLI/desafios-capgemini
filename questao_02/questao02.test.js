const checkPassword = require("./questao02");

test("Empty string the return is 6", () => {
  expect(checkPassword("")).toBe(6);
});

test("String with 1 whitespace the return is 5", () => {
  expect(checkPassword(" ")).toBe(5);
});

test("String ' a!C7 ' the return is 0", () => {
  expect(checkPassword(" a!C7 ")).toBe(0);
});

test("String 'a! C7t' the return is 0", () => {
  expect(checkPassword("a! C7t")).toBe(0);
});

test("String with 6 whitespaces the return is 4", () => {
  expect(checkPassword("      ")).toBe(4);
});

test("String '123456' the return is 3", () => {
  expect(checkPassword("123456")).toBe(3);
});

test("String 'abcdef' the return is 3", () => {
  expect(checkPassword("abcdef")).toBe(3);
});

test("String 'ABCDEF' the return is 3", () => {
  expect(checkPassword("ABCDEF")).toBe(3);
});

test("String '!@#$%^' the return is 3", () => {
  expect(checkPassword("!@#$%^")).toBe(3);
});

test("String 'Ya3%g' the return is 1", () => {
  expect(checkPassword("Ya3%g")).toBe(1);
});

test("String 'Ya3%gA' the return is 0", () => {
  expect(checkPassword("Ya3%gA")).toBe(0);
});

test("String '1234567890abcdefghij' the return is 2", () => {
  expect(checkPassword("1234567890abcdefghij")).toBe(2);
});

test("String '1234567890abcdefghiJ' the return is 2", () => {
  expect(checkPassword("1234567890abcdefghiJ")).toBe(1);
});

test("String '1234567890abcdefghiJ*' the return is 0", () => {
  expect(checkPassword("1234567890abcdefghiJ*")).toBe(0);
});
