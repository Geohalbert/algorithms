var input = [1,2,3,4];

function powerSet(arr) {
  var power = Math.pow(2,arr.length);
  var bins = [];
  for (var i=0;i<power;i++){
    var combinations = [];
    let bin = i.toString(2);
    while (bin.length<arr.length){
      bin = "0"+bin;
    }
    bin = bin.split('')
    for (var j=0;j<arr.length;j++) {
      let num = bin[j]
      if (num==="1") {
        combinations.push(arr[j]);
      }
    }
    bins.push(combinations);
  }
  return bins;
}

console.log('powerSet(input): ',powerSet(input))