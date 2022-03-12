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

(async () => {
  for await (const value of asyncIterator) {
    console.log(`Random number: ${value}`);
  }
})();

/*
  Random number: 0.2739256519181119
  Random number: 0.02916768618079324
  Random number: 0.551660513654116
*/