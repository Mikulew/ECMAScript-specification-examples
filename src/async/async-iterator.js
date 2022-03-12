const asyncObj = {
  [Symbol.asyncIterator]() {
    let n = 3;
    return {
      [Symbol.asyncIterator]() {
        return this;
      },
      next() {
        if (n > 0) {
          n--;
          return new Promise(resolve => {
            setTimeout(() => resolve({ value: Math.random(), done: false }), 2000);
          });
        }

        return Promise.resolve({ done: true });
      },
    };
  }
};

const asyncIterator = asyncObj[Symbol.asyncIterator]();

(async() => {
  console.log(await asyncIterator.next()); // { value: 0.18678968990928624, done: false }
  console.log(await asyncIterator.next()); // { value: 0.12393784106677352, done: false }
  console.log(await asyncIterator.next()); // { value: 0.22269559344861412, done: false }
  console.log(await asyncIterator.next()); // { done: true }
})();