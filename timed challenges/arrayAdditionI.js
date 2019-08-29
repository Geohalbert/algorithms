// Have the function ArrayAdditionI(arr) take the array of numbers
// stored in arr and return the string true if any combination of
// numbers in the array (excluding the largest number) can be added
// up to equal the largest number in the array, otherwise return
// the string false. For example: if arr contains [4, 6, 23, 10, 1, 3]
// the output should return true because 4 + 6 + 10 + 3 = 23. The array
// will not be empty, will not contain all the same elements, and
// may contain negative numbers.

function ArrayAdditionI(arr) {
  var lar = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > lar) {
      lar = arr[i];
    }
  }
  var larInd = arr.indexOf(lar);
  arr.splice(larInd, 1);
  var sets = [];
  var total = Math.pow(2, arr.length);
  for (i = 0; i < total; i++) {
    let temp = [];
    let num = i.toString(2);
    while (num.length < arr.length) {
      num = "0" + num;
    }
    sets.push(num);
  }
  for (j = 0; j < total; j++) {
    var sum = 0;
    let bin = sets[j];
    bin.split("");
    for (k = 0; k < arr.length; k++) {
      if (bin[k] === "1") {
        sum = sum + Number(arr[k]);
        if (sum === lar) {
          return true;
        }
      }
    }
  }
  return false;
}
