let target = {};
let proxy = new Proxy(target, {
  getPrototypeOf(trapTarget) {
    return Reflect.getPrototypeOf(trapTarget);
  },
  setPrototypeOf(trapTarget, proto) {
    return Reflect.setPrototypeOf(trapTarget, proto);
  }
});

let targetPrototype = Object.getPrototypeOf(target);
let proxyPrototype = Object.getPrototypeOf(proxy);

console.log(
  "targetPrototype === Object.prototype",
  targetPrototype === Object.prototype
);
console.log(
  "proxyPrototype === Object.prototype",
  proxyPrototype === Object.prototype
);
