import { findPairsWithSum } from "./findPairsWithSum";

describe("FindPairsWithSum(): Acceptance Tests", () => {
  test("it finds pairs for non-repeating integers", () => {
    const arr = [2, 7, 4, 0, 9, 5, 1, 3];
    const target = 7;

    const expected = [
      [0, 7],
      [2, 5],
      [3, 4],
    ];

    const result = findPairsWithSum(arr, target);

    expect(result).toEqual(expected);
  });

  test("it only returns unique pairs for repeating integers", () => {
    const arr = [4, 2, 1, 5, 4, 2, 5, 1];
    const target = 6;

    const expected = [
      [1, 5],
      [2, 4],
    ];

    const result = findPairsWithSum(arr, target);
    expect(result).toEqual(expected);
  });
});

describe("FindPairsWithSum(): Edge Cases", () => {
  test("it finds pairs for negative numbers", () => {
    const arr = [-2, -7, 9, -3, 0, 5];
    const target = 2;

    const expected = [
      [-7, 9],
      [-3, 5],
    ];

    const result = findPairsWithSum(arr, target);

    expect(result).toEqual(expected);
  });

  test("it returns an empty array when no pair is found", () => {
    const arr = [-2, -7, 9, -3, 0, 5];
    const target = 11;

    const expected: number[] = [];

    const result = findPairsWithSum(arr, target);

    expect(result).toEqual(expected);
  });

  test("it returns an empty array when no pair is found", () => {
    const arr = [-2, -7, 9, -3, 0, 5];
    const target = 11;

    const expected: number[] = [];

    const result = findPairsWithSum(arr, target);

    expect(result).toEqual(expected);
  });
});
