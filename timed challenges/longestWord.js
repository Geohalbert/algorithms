// Have the function LongestWord(sen) take the sen parameter being passed
// and return the largest word in the string. If there are two or more words
// that are the same length, return the first word from the string with that
// length. Ignore punctuation and assume sen will not be empty.

function LongestWord(sen) {
  var regex = /\W+/;
  var words = sen.split(regex);
  let longWord = null;
  for (i = 0; i < words.length; i++) {
    let word = words[i];
    let letters = word.split("");
    if (longWord === null) {
      longWord = word;
    } else {
      let longLetters = longWord.split("");
      if (longLetters.length < letters.length) {
        longWord = word;
      }
    }
  }
  sen = longWord;
  return sen;
}
