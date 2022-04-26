/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let result = null;
  for (let i = 0; i <= index; i++) {
    if (index === i) {
      result = queue.dequeue();
      return result;
    } else {
      result = queue.dequeue();
      queue.enqueue(result);
    }
  }
}
