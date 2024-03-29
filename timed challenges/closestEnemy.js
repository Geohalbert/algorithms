// Have the function ClosestEnemy(arr) take the array of numbers
// stored in arr and from the position in the array where a 1 is,
// return the number of spaces either left or right you must move
// to reach an enemy which is represented by a 2. For example: if
// arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3
// because the closest enemy (2) is 3 spaces away from the 1.
// The array will contain any number of 0's and 2's, but only
// a single 1. It may not contain any 2's at all as well,
// where in that case your program should return a 0.

function ClosestEnemy(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let num = arr[i];
    if (num === 1) {
      if (arr[i - 1] === 2 || arr[i + 1] === 2) {
        return "1";
      } else {
        let count = 2;
        let sliced = arr.slice(i + 2);
        for (j = 0; j < sliced.length; j++) {
          if (sliced[j] === 2) {
            return String(count);
          }
          count += 1;
        }
      }
    }
  }
  return "0";
}
