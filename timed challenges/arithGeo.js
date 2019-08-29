// Have the function ArithGeo(arr) take the array of numbers stored
// in arr and return the string "Arithmetic" if the sequence follows
// an arithmetic pattern or return "Geometric" if it follows a geometric
// pattern. If the sequence doesn't follow either pattern return -1.
// An arithmetic sequence is one where the difference between each of
// the numbers is consistent, where as in a geometric sequence, each
// term after the first is multiplied by some constant or common ratio.
// Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
// Negative numbers may be entered as parameters, 0 will not be entered,
// and no array will contain all the same elements.

function ArithGeo(arr) {
  var diff = Number(arr[1] - arr[0]);
  var div = Number(arr[1] / arr[0]);
  for (i = 0; i < arr.length - 1; i++) {
    let diffTest = Number(arr[i + 1] - arr[i]);
    if (diffTest !== diff) {
      break;
    } else if (i === arr.length - 2) {
      return "Arithmetic";
    }
  }

  for (j = 0; j < arr.length - 1; j++) {
    let divTest = Number(arr[j + 1] / arr[j]);
    if (divTest !== div) {
      break;
    } else if (j === arr.length - 2) {
      return "Geometric";
    }
  }
  return -1;
}
