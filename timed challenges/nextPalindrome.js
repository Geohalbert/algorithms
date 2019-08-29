// Have the function NextPalindrome(num) take the num parameter
// being passed and return the next largest palindromic number. The
// input can be any positive integer. For example: if num is 24,
// then your program should return 33 because that is the next
// largest number that is a palindrome.

function NextPalindrome(num) {
  if (num < 9) {
    num++;
  } else {
    var status = "false";
    while (status === "false") {
      num++;
      let str = String(num);
      let ints = str
        .split("")
        .reverse()
        .join("");
      if (str === ints) {
        status = "true";
      }
    }
  }
  return num;
}
