function createRangeArray(from, to) {
  return {
    from,
    to,
    *[Symbol.iterator]() {
      for (let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
}

console.log([...createRangeArray()]); // []
console.log([...createRangeArray(1, -1)]); // []
console.log([...createRangeArray(1, 10)]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log([...createRangeArray(1, 25)]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
const rangeArray = createRangeArray(1, 5);
console.log(rangeArray); // { from: 1, to: 5, Symbol(Symbol.iterator): ƒ* [Symbol.iterator]() }