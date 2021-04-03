let target = {};
let proxy = new Proxy(target, {
  isExtensible(trapTarget) {
    return Reflect.isExtensible(trapTarget);
  },
  preventExtensions(trapTarget) {
    return Reflect.preventExtensions(trapTarget);
  }
});

console.log(Object.isExtensible(target));
console.log(Object.isExtensible(proxy));

Object.preventExtensions(proxy);

console.log(Object.isExtensible(target));
console.log(Object.isExtensible(proxy));
