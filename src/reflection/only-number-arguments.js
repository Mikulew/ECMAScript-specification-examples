function sum(...values) {
  return values.reduce((acc, curr) => acc + curr, 0);
}

let sumProxy = new Proxy(sum, {
  apply(trapTarget, thisArg, argumentList) {
    argumentList.forEach((element) => {
      if (typeof element !== "number") {
        throw new TypeError("All arguments have to be number typed.");
      }
    });

    return Reflect.apply(trapTarget, thisArg, argumentList);
  },
  construct() {
    throw new TypeError("This function cannot be invoked by new operator.");
  }
});

console.log(sumProxy(1, 2, 3, 4));

console.log(sumProxy(1, "2", 3, 4)); // TypeError: All arguments have to be number typed.

let result = new sumProxy(); // TypeError: This function cannot be invoked by new operator.
