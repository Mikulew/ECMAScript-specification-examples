const obj = {
  [Symbol.asyncIterator]() {
    return {
      [Symbol.asyncIterator]() {
        return this;
      },
      next() {
        return new Promise(resolve => {
          setTimeout(() => resolve({ value: 123, done: true }));
        });
      },
    }
  }
};

const iterator = obj[Symbol.asyncIterator]();

(async () => {
  console.log(1);
  const result = await iterator.next();
  console.log(result);
  console.log(2);
})();

// the same

(() => {
  console.log(1);
  iterator.next()
    .then(result => console.log(result))
    .then(() => console.log(2));
})();

/*
  1
  { value: 123, done: true }
  2
*/

(() => {
  console.log(1);
  iterator.next().then(result => console.log(result));
  console.log(2);
})();

/*
  1
  2
  { value: 123, done: true }
*/
