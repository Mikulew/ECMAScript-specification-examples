const first = { id: 1 };
const second = { id: 2 };

const map = new Map([
  [first, 'some value'],
  [second, null],
]);

console.log(map.has(first)); // true
console.log(map.has(second)); // true
console.log(map.has('other key')); // false

// A false negative indicates no bug when there is one.

console.log(!!map.get(first)); // true
console.log(!!map.get(second)); // false
console.log(!!map.get('other key')); // false
