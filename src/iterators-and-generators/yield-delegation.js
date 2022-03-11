function* yieldWithoutDelegationExample() {
  yield [1, 2, 3];
  return 'The end';
}

const generatorWithoutYieldDelegation = yieldWithoutDelegationExample();
console.log(generatorWithoutYieldDelegation.next()); // { value: [1, 2, 3], done: false }
console.log(generatorWithoutYieldDelegation.next()); // { value: 'The end', done: true }

function* yieldDelegationExample() {
  yield* [1, 2, 3];
  return 'The end';
}

const generatorWithYieldDelegation = yieldDelegationExample();
console.log(generatorWithYieldDelegation.next()); // { value: 1, done: false }
console.log(generatorWithYieldDelegation.next()); // { value: 2, done: false }
console.log(generatorWithYieldDelegation.next()); // { value: 3, done: false }
console.log(generatorWithYieldDelegation.next()); // { value: 'The end', done: true }
