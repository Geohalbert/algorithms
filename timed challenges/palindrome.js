// Have the function Palindrome(str) take the str parameter
// being passed and return the string true if the parameter
// is a palindrome, (the string is the same forward as it is
// backward) otherwise return the string false.
// For example: "racecar" is also "racecar" backwards.
// Punctuation and numbers will not be part of the string.

function Palindrome(str) {
  str.toLowerCase();
  var regex = /\s+/g;
  str = str.replace(regex, "");
  var popped = str.split("");
  var reverse = "";
  while (popped.length > 0) {
    let char = popped.pop();
    reverse = reverse.concat(char);
  }
  return str === reverse ? true : false;
}
