let obj = {
  key_1: 'value_1',
  key_2: 'value_2',
};

for (const key of obj) {
  console.log(key); // Uncaught TypeError: obj is not iterable
}

// iterator solution

obj = {
  key_1: 'value_1',
  key_2: 'value_2',
  [Symbol.iterator]() {
    const elements = Object.entries(this).reverse();
    let index = elements.length - 1;

    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (index >= 0) {
          index--;
          const [key, value] = elements.pop();
          return { value: [key, value], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
};

const objectWithIterator = obj[Symbol.iterator]();
console.log([...objectWithIterator]); // [['key_1', 'value_1'], ['key_2', 'value_2']]
console.log([...obj]);  // [['key_1', 'value_1'], ['key_2', 'value_2']]

for (const  [key, value] of obj) {
  console.log(`${key} | ${value}`);
}

// key_1 | value_1
// key_2 | value_2

// generator solution

obj = {
  key_1: 'value_1',
  key_2: 'value_2',
  [Symbol.iterator]: function* () {
    for (let key in this) {
      yield [key, this[key]];
    }
  },
};

// // imperative way

for (const  [key, value] of obj) {
  console.log(`${key} | ${value}`);
}

// // key_1 | value_1
// // key_2 | value_2

// // declarative way

Object.entries(obj).forEach(([key, value]) => console.log(`${key} | ${value}`));
