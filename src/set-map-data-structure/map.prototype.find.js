const x = { id: 1 };
const y = { id: 2 };
const z = { id: 3 };

const map = new Map();
map.set(x, 'value 1');
map.set(y, { someKey: '123' });
map.set(z, ['a', 'b']);

if (!Map.prototype.find) {
  Object.defineProperty(Map.prototype, 'find', {
    enumerable: false,
    value(searched) {
      const isObject = object => object != null && typeof object === 'object';
      const areObjects = (val1, val2) => isObject(val1) && isObject(val2);

      function deepEqual(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);

        if (keys1.length !== keys2.length) return false;

        for (const key of keys1) {
          const val1 = object1[key];
          const val2 = object2[key];
          const areOnlyObjects = areObjects(val1, val2);
          if ((areOnlyObjects && !deepEqual(val1, val2)) || (!areOnlyObjects && val1 !== val2)) return false;
        }

        return true;
      }
      return [...this.entries()].find(([_, value]) => {
        if (areObjects(value, searched)) {
          return deepEqual(value, searched);
        }
        return value === searched;
      });
    },
  });
}

console.log(map.find('value 1')); // [{ id: 1 }, 'value 2']
console.log(map.find({ someKey: '123' })); // [{ id: 2 }, {someKey: '123'}]
console.log(map.find(['a', 'b'])); // [{ id: 3 }, ['a', 'b']]
console.log(map.find('other-value')); // undefined

const example = new Map([['key', { id: 1 }]]);
const exampleMap = new Map([['someKey', example]]);

console.log(exampleMap.find(example)[0]); // 'someKey'
console.log(exampleMap.find(example)[1]); // Map(1) {'key' => {…}}
