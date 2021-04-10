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

// console.log(sumProxy(1, "2", 3, 4)); // TypeError: All arguments have to be number typed.

// let result = new sumProxy(); // TypeError: This function cannot be invoked by new operator.

function Numbers(...values) {
  this.values = values;
}

let NumbersProxy = new Proxy(Numbers, {
  apply() {
    throw new TypeError("This function have to be invoked by new operator.");
  },
  construct(trapTarget, argumentList) {
    argumentList.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new TypeError("All arguments have to be number typed.");
      }
    });

    return Reflect.construct(trapTarget, argumentList);
  }
});

let instance = new NumbersProxy(1, 2, 3, 4);
console.log(instance.values);

// NumbersProxy(1, 2, 3, 4); // TypeError: This function have to be invoked by new operator.
