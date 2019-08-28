var input = [1,5,4,2,5,1,6,7,3,5,3,1,7,8,8,8,8,8];

function duplicates(arr) {
  var dups = {};
  var nums = [];
  for (i=0;i<arr.length;i++){
    let num = arr[i];
    if (!nums.includes(num)) {
      nums.push(num)
    } else {
      (!dups[num]>0) ? dups[num] = 1 : (dups[num] += 1)
    }
  }
  return dups
}

console.log("duplicates: ",duplicates(input));