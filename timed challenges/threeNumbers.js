// Have the function ThreeNumbers(str) take the str parameter
// being passed and determine if exactly three unique, single-digit
// integers occur within each word in the string. The integers can
// appear anywhere in the word, but they cannot be all adjacent to
// each other. If every word contains exactly 3 unique integers
// somewhere within it, then return the string true, otherwise
// return the string false. For example: if str is "2hell6o3 wor6l7d2"
// then your program should return "true" but if the string is
// "hell268o w6or2l4d" then your program should return "false"
// because all the integers are adjacent to each other in the
// first word. Use the Parameter Testing feature in the box
// below to test your code with different arguments.

function ThreeNumbers(str) {
  var arr = str.split(" ");
  for (i = 0; i < arr.length; i++) {
    let nums = [];
    nums.push(arr[i].match(/\d+/g));
    let int = [];
    for (j = 0; j < nums[0].length; j++) {
      let num = nums[0][j];
      if (num.length > 3) {
        return false;
      } else if (num.length > 1) {
        let ints = num.split("");
        if (int.includes(ints[0])) {
          return false;
        }
        int.push(ints[0]);
        if (int.includes(ints[1])) {
          return false;
        }
        int.push(ints[1]);
      }
      if (int.includes(num)) {
        return false;
      }
    }
  }
  return true;
}
