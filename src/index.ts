import { findPairsWithSum } from "./findPairsWithSum";

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
