/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const arrWordsWithSuffix = [];
  let completeWords = '';
  for (let i = 0; i < words.length; i++) {
    completeWords = words[i] + suffix;
    arrWordsWithSuffix.push(completeWords);
  }
  return arrWordsWithSuffix;
}
