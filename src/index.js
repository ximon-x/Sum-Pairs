function findPairsWithSum(arr, target) {
  // Safe guard for when array is empty.
  if (arr.length == 0) return [];

  // Sort the array to minimize number of required array lookups.
  arr.sort((a, b) => a - b);

  // Instantiate pairs for holding unique entries.
  const pairs = new Set();

  for (let i = 0; i < arr.length - 1; i++) {
    // Skipping numbers that can't add up to target.
    if (arr[i] > target) continue;

    // Iterate from [i + 1]th element to the end of the array.
    for (let j = i + 1; j < arr.length; j++) {
      // The larger number is guaranteed to be at the end of the pair array,
      // as array has been sorted.
      if (arr[i] + arr[j] == target) pairs.add([arr[i], arr[j]]);
    }
  }

  const result = Array.from([...pairs]);

  return result;
}

async function main() {
  const arr = [2, 7, 4, 0, 9, 5, 1, 3];
  const target = 7;

  const result = findPairsWithSum(arr, target);
  console.log(result);
}

main()
  .then(() => {
    console.log("Process executed completely");
  })
  .catch((err) => {
    console.error(`Something went wrong: ${err}`);
  });
