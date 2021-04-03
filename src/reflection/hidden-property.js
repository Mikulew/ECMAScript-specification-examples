let target = {
  name: "target",
  value: 42,
  secret: "You do not have access to this property!"
};

let proxy = new Proxy(target, {
  has(trapTarget, key) {
    return key === "secret" ? false : Reflect.has(trapTarget, key);
  }
});

console.log("name in proxy", "name" in proxy);
console.log("value in proxy", "value" in proxy);
console.log("secret in proxy", "secret" in proxy);
