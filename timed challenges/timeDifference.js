// Have the function TimeDifference(strArr) read the array of
// strings stored in strArr which will be an unsorted list of
// times in a twelve-hour format like so: HH:MM(am/pm). Your
// goal is to determine the smallest difference in minutes
// between two of the times in the list. For example: if strArr
// is ["2:10pm", "1:30pm", "10:30am", "4:42pm"] then your program
// should return 40 because the smallest difference is between
// 1:30pm and 2:10pm with a difference of 40 minutes. The input
// array will always contain at least two elements and all of
// the elements will be in the correct format and unique.

function TimeDifference(strArr) {
  var arr = [];
  var diff = 1440;
  for (i = 0; i < strArr.length; i++) {
    let tot = 0;
    let time = strArr[i];
    let half = time.slice(-2);
    let nums = time.split(":");
    let hour = Number(nums[0].match(/\d+/g));
    let mins = Number(nums[1].match(/\d+/g));
    if (hour === 12) {
      half === "pm" ? (tot = hour * 60 + mins) : (tot = mins);
    } else if (hour !== 12 && half === "pm") {
      tot = 12 * 60 + hour * 60 + mins;
    } else if (hour !== 12 && half === "am") {
      tot = hour * 60 + mins;
    }
    arr.push(tot);
  }
  arr.sort((a, b) => {
    return a - b;
  });
  arr.push(arr[0] + 24 * 60);
  for (j = 1; j < arr.length; j++) {
    let value = arr[j] - arr[j - 1];
    if (value < diff) {
      diff = value;
    }
  }
  return diff;
}
