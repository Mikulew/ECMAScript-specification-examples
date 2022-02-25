function makeIterator(array) {
  let index = 0;
  return {
    next() {
      return index < array.length ?
        { value: array[index++], done: false } :
        { done: true };
    }
  }
}

const it = makeIterator(['this', 'is', 'a ', 'simple', 'iterator']);
console.log(it.next()); // { value: 'this', done: false }
console.log(it.next()); // { value: 'is', done: false }
console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'simple', done: false }
console.log(it.next()); // { value: 'iterator', done: false }
console.log(it.next()); // { done: true }
