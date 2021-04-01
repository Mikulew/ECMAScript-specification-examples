const something = (function () {
  let nextValue;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (nextValue === undefined) {
        nextValue = 1;
      } else {
        nextValue = 3 * nextValue + 6;
      }
      return { done: false, value: nextValue };
    }
  };
})();

console.log("-".repeat(50));

for (let v of something) {
  console.log(v);
  if (v > 5000) {
    break;
  }
}
