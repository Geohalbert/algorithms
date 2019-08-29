// Have the function AlphabetSearching(str) take the str
// parameter being passed and return the string true if
// every single letter of the English alphabet exists in
// the string, otherwise return the string false. For
// example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv"
// then your program should return the string true because
// every character in the alphabet exists in this string
// even though some characters appear more than once. Use
// the Parameter Testing feature in the box below to test
// your code with different arguments.

function AlphabetSearching(str) {
  var arr = str.split("");
  var alph = "asdfghjklewqrytiuopxczvbnm";
  alph.split("");
  for (i = 0; i < alph.length; i++) {
    let char = alph[i];
    if (!arr.includes(char)) {
      return false;
    }
  }
  return true;
}
