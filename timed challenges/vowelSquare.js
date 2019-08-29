// Have the function VowelSquare(strArr) take the strArr parameter
// being passed which will be a 2D matrix of some arbitrary size
// filled with letters from the alphabet, and determine if a 2x2
// square composed entirely of vowels exists in the matrix. For
// example: strArr is ["abcd", "eikr", "oufj"] then this matrix
// looks like the following:

// a b c d
// e i k r
// o u f j

// Within this matrix there is a 2x2 square of vowels starting in
// the second row and first column, namely, ei, ou. If a 2x2 square
// of vowels is found your program should return the top-left
// position (row-column) of the square, so for this example your
// program should return 1-0. If no 2x2 square of vowels exists,
// then return the string not found. If there are multiple squares
// of vowels, return the one that is at the most top-left position
// in the whole matrix. The input matrix will at least be of
// size 2x2.

function VowelSquare(strArr) {
  const vowels = "aeiou";
  for (r = 0; r < strArr.length - 1; r++) {
    let row = strArr[r].split("");
    for (c = 0; c < row.length - 1; c++) {
      if (vowels.match(row[c]) && vowels.match(row[c + 1])) {
        let nextRow = strArr[r + 1].split("");
        if (vowels.match(nextRow[c]) && vowels.match(nextRow[c + 1])) {
          return r + "-" + c;
        }
      }
    }
  }
  return "not found";
}
