import twoSum from "../src/node/cli";
describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(twoSum(1, 2)).toBe(3);
  });
});
