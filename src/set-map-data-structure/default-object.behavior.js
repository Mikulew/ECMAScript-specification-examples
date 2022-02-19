let obj = {
  key_1: 'value_1',
  key_2: 'value_2',
};

for (const key of obj) {
  console.log(key); // Uncaught TypeError: obj is not iterable
}

obj = {
  key_1: 'value_1',
  key_2: 'value_2',
  [Symbol.iterator]: function* () {
    for (let key in this) {
      yield [key, this[key]];
    }
  },
};

// imperative way

for (const  [key, value] of obj) {
  console.log(`${key} | ${value}`);
}

// key_1 | value_1
// key_2 | value_2

// declarative way

Object.entries(obj).forEach(([key, value]) => console.log(`${key} | ${value}`));
