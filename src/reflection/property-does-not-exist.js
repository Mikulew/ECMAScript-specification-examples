let proxy = new Proxy(
  {},
  {
    get(trapTarget, key, receiver) {
      if (!(key in receiver)) {
        throw new TypeError(`Property ${key} does not exist`);
      }
      return Reflect.get(trapTarget, key, receiver);
    }
  }
);

proxy.name = "proxy";
console.log(proxy.name);

console.log(proxy.something);
