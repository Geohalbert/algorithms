// Have the function BitwiseOne(strArr) take the array of strings
// stored in strArr, which will only contain two strings of equal
// length that represent binary numbers, and return a final binary
// string that performed the bitwise OR operation on both strings.
// A bitwise OR operation places a 0 in the new string where there
// are zeroes in both binary strings, otherwise it places a 1 in
// that spot. For example: if strArr is ["1001", "0100"] then your
// program should return the string "1101"

function BitwiseOne(strArr) {
  var output = "";
  var str1 = strArr[0].split("");
  var str2 = strArr[1].split("");
  for (i = 0; i < str1.length; i++) {
    str1[i] === "1" && str2[i] === "1"
      ? (output += "1")
      : str1[i] === str2[i]
      ? (output += "0")
      : (output += "1");
  }
  return output;
}
