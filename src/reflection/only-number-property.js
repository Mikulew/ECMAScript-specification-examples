let target = {
  name: "This object accepts only numeric value"
};

let proxy = new Proxy(target, {
  set(trapTarget, key, value, receiver) {
    if (!trapTarget.hasOwnProperty(key)) {
      if (isNaN(value)) {
        throw new TypeError("The property must be a number.");
      }
    }

    return Reflect.set(trapTarget, key, value, receiver);
  }
});

proxy.count = 1;
console.log("proxy.count", proxy.count);
console.log("target.count", target.count);

proxy.stringProperty = "Test";
