import init from "../src/node/init";
describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(init).not.toThrowError();

    expect(() => init({ key: "abc", value: "ss" })).not.toThrowError();
  });
});
