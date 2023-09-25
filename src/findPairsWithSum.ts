function compareArray(arr1: number[], arr2: number[]): boolean {
  if (arr1.length != arr2.length) return false;

  let same = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) same = false;
  }

  return same;
}

export function findPairsWithSum(arr: number[], target: number) {
  if (arr.length == 0) return [];

  const pairs: number[][] = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > target) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        const newPair: number[] = [arr[i], arr[j]];
        let present = false;

        for (let k = 0; k < pairs.length; k++) {
          if (compareArray(pairs[k], newPair)) present = true;
        }

        if (!present) pairs.push(newPair);
      }
    }
  }

  return pairs;
}
