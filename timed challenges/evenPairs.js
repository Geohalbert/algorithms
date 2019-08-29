// Have the function EvenPairs(str) take the str parameter being
// passed and determine if a pair of adjacent even numbers exists
// anywhere in the string. If a pair exists, return the string true,
// otherwise return false. For example: if str is "f178svg3k19k46"
// then there are two even numbers at the end of the string, "46"
// so your program should return the string true. Another example:
// if str is "7r5gg812" then the pair is "812" (8 and 12) so your
// program should return the string true.

function EvenPairs(str) {
  var nums = str.match(/\d\d+/g);
  if (nums !== null) {
    for (i = 0; i < nums.length; i++) {
      let ints = nums[i].split("");
      for (j = 0; j < ints.length - 1; j++) {
        let num1 = Number(ints[j]);
        let num2 = Number(ints.slice(j + 1).join(""));
        if (num1 % 2 === 0 && num2 % 2 === 0) {
          return true;
        }
      }
    }
  }
  return false;
}
