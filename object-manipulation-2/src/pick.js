/* exported pick */
function pick(source, keys) {
  var object = {};
  for (let i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (keys.includes(key) && typeof source[key] !== 'undefined') {
      object[key] = source[key];
    }
  }
  return object;
}
