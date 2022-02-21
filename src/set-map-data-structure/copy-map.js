const someObj = { x: 5 };

const map = new Map();
map.set(someObj, 'value 1');

const copyMap = new Map(map);

console.log(map.get(someObj)); // 'value 1'
console.log(copyMap.get(someObj)); // 'value 1'

map.set(someObj, 'new value'); // value modification

console.log(map.get(someObj)); // 'new value'
console.log(copyMap.get(someObj)); // 'value 1'

const copyMap2 = new Map(map.entries()); // MapIterator {{…} => 'new value'}
console.log(copyMap2.get(someObj)); // 'new value'

const copyMap3 = new Map(copyMap.entries()); // MapIterator {{…} => 'value 1'}
console.log(copyMap3.get(someObj)); // 'value 1'
