const obj = { id: 1 };
const map = new Map([
  ['key', obj],
]);

console.log(map.get('key')); // { id: 1 }

obj.id = 'new value';
console.log(map.get('key')); // { id: 'new value' }

const person = {
  name: 'Tomek',
  address: {
    city: 'Warszawa',
  },
};

const unModifiedmap = new Map();
unModifiedmap.set('address', person.address);
console.log(unModifiedmap.get('address')); // { city: 'Warszawa' }

delete person.address;

console.log(unModifiedmap.get('address')); // { city: 'Warszawa' }
console.log(person); // { name: 'Tomek' }
