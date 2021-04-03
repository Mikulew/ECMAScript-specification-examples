let target = {};
let proxy = new Proxy(target, {
  isExtensible(trapTarget) {
    return Reflect.isExtensible(trapTarget);
  },
  preventExtensions(trapTarget) {
    return Reflect.preventExtensions(trapTarget);
  }
});

console.log("Object.isExtensible(target)", Object.isExtensible(target));
console.log("Object.isExtensible(proxy)", Object.isExtensible(proxy));

Object.preventExtensions(proxy);

console.log("Object.isExtensible(target)", Object.isExtensible(target));
console.log("Object.isExtensible(proxy)", Object.isExtensible(proxy));

let targetTurnOffPreventExtensions = {};
let proxyTurnOffPreventExtensions = new Proxy(targetTurnOffPreventExtensions, {
  isExtensible(trapTarget) {
    return Reflect.isExtensible(trapTarget);
  },
  preventExtensions(trapTarget) {
    return false;
  }
});

console.log(
  "Object.isExtensible(targetTurnOffPreventExtensions)",
  Object.isExtensible(targetTurnOffPreventExtensions)
);
console.log(
  "Object.isExtensible(proxyTurnOffPreventExtensions)",
  Object.isExtensible(proxyTurnOffPreventExtensions)
);

Object.preventExtensions(proxyTurnOffPreventExtensions);
/*
  TypeError: 'preventExtensions' on proxy: trap returned falsish
*/

console.log(
  "Object.isExtensible(targetTurnOffPreventExtensions)",
  Object.isExtensible(targetTurnOffPreventExtensions)
);
console.log(
  "Object.isExtensible(proxyTurnOffPreventExtensions)",
  Object.isExtensible(proxyTurnOffPreventExtensions)
);
// return false
