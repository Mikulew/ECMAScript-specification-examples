function* generator() {
  const numbers = [yield 'first value', yield 'second value'];
  console.log(numbers);
  return 'the end';
}

const gen = generator();
console.log(gen.next()); // {value: 'first value', done: false}
console.log(gen.next(1)); // {value: 'second value', done: false}
console.log(gen.next(2));
/* 
  console.log from generator: [1, 2]
  console.log from gen.next(2): {value: 'the end', done: true}
*/
