import { number2words } from "./task1.js";

describe("Data type conversions", () => {
  test("Converts numbers to words", () => {
    expect(number2words(300)).toBe("three hundred");
  });
  test("Converts numbers to words", () => {
    expect(number2words(1000)).toBe("one thousand");
  });
  test("Converts numbers to words", () => {
    expect(number2words(499)).toBe("four hundred and ninety-nine");
  });
  test("Converts numbers to words", () => {
    expect(number2words('hello')).toBe("not a number");
  });
});
