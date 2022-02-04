/* exported capitalize */
function capitalize(word) {
  const string = word.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}
