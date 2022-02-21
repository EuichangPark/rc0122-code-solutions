/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!key.includes(target)) {
      target[key] = source[key];
    } else {
      target.key = source.key;
    }
  }
}
