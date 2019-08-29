// Have the function MeanMode(arr) take the array of numbers
// stored in arr and return 1 if the mode equals the mean, 0 if
// they don't equal each other (ie. [5, 3, 3, 3, 1] should
// return 1 because the mode (3) equals the mean (3)). The array
// will not be empty, will only contain positive integers, and
// will not contain more than one mode.

function MeanMode(arr) {
  var nums = {};
  var total = 0;
  var mode = 0;
  for (i = 0; i < arr.length; i++) {
    let num = arr[i];
    total = total + num;
    if (!nums[num]) {
      nums[num] = 1;
    } else {
      nums[num] += 1;
      if (nums[num] > mode) {
        mode = num;
      }
    }
  }
  var mean = total / arr.length;
  return mode === mean ? 1 : 0;
}
