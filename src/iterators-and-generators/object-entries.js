const person = { firstName: 'John', lastName: 'Doe' };

// default

for (const [key, value] of person) {
  console.log(`${key}: ${value}`); // Uncaught TypeError: person is not iterable
}

// iterator

const personWithIterator = {
  firstName: 'John',
  lastName: 'Doe',
  [Symbol.iterator]() {
    let index = 0;
    let entries = Object.entries(this);

    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (index < entries.length) {
          const [key, value] = entries[index];
          index++;
          return { value: [key, value], done: false };
        }

        return { done: true };
      },
  };
  },
}

for (const [key, value] of personWithIterator) {
  console.log(`${key}: ${value}`);
  /* 
    firstName: John
    lastName: Doe
  */
}

// generator

function* objectEntries(obj) {
  const propKeys = Reflect.ownKeys(obj);

  for (propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

for (const [key, value] of objectEntries(person)) {
  console.log(`${key}: ${value}`);
  /* 
    firstName: John
    lastName: Doe
  */
}
