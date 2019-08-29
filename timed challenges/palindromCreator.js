// Have the function PalindromeCreator(str) take the str parameter
// being passed and determine if it is possible to create a
// palindromic string of minimum length 3 characters by removing
// 1 or 2 characters. For example: if str is "abjchba" then you
// can remove the characters jc to produce "abhba" which is a
// palindrome. For this example your program should return the
// two characters that were removed with no delimiter and in the
// order they appear in the string, so jc. If 1 or 2 characters
// cannot be removed to produce a palindrome, then return the
// string not possible. If the input string is already a
// palindrome, your program should return the string palindrome.

// The input will only contain lowercase alphabetic characters.
// Your program should always attempt to create the longest
// palindromic substring by removing 1 or 2 characters
// (see second sample test case as an example). The 2 characters
// you remove do not have to be adjacent in the string.

function PalindromeCreator(str) {
  if (isPalindrome(str)) {
    return "palindrome";
  }
  for (i = 0; i < str.length; i++) {
    let testArr = str.split("");
    let letter = testArr.splice(i, 1);
    let newString = testArr.join("");
    if (isPalindrome(newString)) {
      return letter[0];
    }
  }
  if (str.length > 4) {
    for (i = 0; i < str.length; i++) {
      let arr = [];
      for (j = 0; j < str.length - 1; j++) {
        let testArr = str.split("");
        arr[0] = testArr.splice(i, 1);
        arr[1] = testArr.splice(j, 1);
        let newString = testArr.join("");
        if (isPalindrome(newString)) {
          return arr.join("");
        }
      }
    }
  }
  return "not possible";
}

function isPalindrome(str) {
  let rev = str
    .split("")
    .reverse()
    .join("");
  if (str === rev) {
    return true;
  }
}
