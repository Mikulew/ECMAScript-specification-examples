function* simpleGenerator() {
  let x = 1;
  console.log('First calling, x: ', x);
  yield;

  x += 1;
  console.log('Second calling, x: ', x);
  yield;

  x += 1;
  console.log('Third calling, x: ', x);
}

const generator = simpleGenerator();
generator.next(); // First calling, x: 1
generator.next(); // Second calling, x: 2
generator.next(); // Third calling, x: 3
generator.next(); // { value: undefined, done: true }
