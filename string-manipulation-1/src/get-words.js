/* exported getWords */
function getWords(string) {
  var result = string.split(' ');
  if (string === '') {
    result = [];
  }
  return result;
}
