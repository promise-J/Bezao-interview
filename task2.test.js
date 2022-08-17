import { crackAText } from "./task2";


describe("Data type conversions", () => {
  test("Cracks encrypted and also encrypts", () => {
    expect(crackAText(")>aad ldga&", 'enc')).toBe('hello world');
  });
    test("Cracks encrypted and also encrypts", () => {
    expect(crackAText(")>aadu ldga&", 'enc')).toBe("Opps, wrong repping");
  });
  test("Cracks encrypted and also encrypts", () => {
    expect(crackAText("hello world", 'dec')).toBe(")>aad ldga&");
  });

});
