/**
 * A Simple Helper function for validating that two arrays are same.
 * */
function compareArray(arr1: number[], arr2: number[]): boolean {
  if (arr1.length != arr2.length) return false;

  let same = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) same = false;
  }

  return same;
}

/**
 * Algorithm Analysis:
 * The running time complexity of findPairsWithSum() is given by:
 *                Ο(mlogm + (m - n)k)
 *    where:
 *          mlogm => Time required to sort the array in place.
 *          m => Total number of elements in the array.
 *          n => Total number of elements greater than the target value.
 *          k => Current amount of elements in the pairs array that need to be
 *          compared.
 */
export function findPairsWithSum(arr: number[], target: number) {
  // Safe guard for when the array is empty.
  if (arr.length == 0) return [];

  // Create array to hold pairs and sort the array to minimize loops
  const pairs: number[][] = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    // If Item is lesser than target, we do not need to perform any further
    // computation as it can not be a member of the pairs array.
    if (arr[i] > target) continue;

    for (let j = i + 1; j < arr.length; j++) {
      // When a pair is found, we validate that it is not already in the pairs
      // array by utilizing the helper compareArray() function.
      if (arr[i] + arr[j] == target) {
        const newPair: number[] = [arr[i], arr[j]];
        let present = false;

        // Compare current pair with all pairs
        for (let k = 0; k < pairs.length; k++) {
          if (compareArray(pairs[k], newPair)) present = true;
        }

        if (!present) pairs.push(newPair);
      }
    }
  }

  return pairs;
}
