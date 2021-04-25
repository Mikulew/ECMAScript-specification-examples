// Higher Order Function
const modify = (x, action) => action(x);
const modified = modify(5, (x) => x * 2);
console.log("modified", modified);

// Curring
const curring = (x) => (y) => x + y;
const curried = curring(5)(4);
// console.log("curried", curried);

// Impure function & side effects
const nums = [1, 2, 3];
const impure = (arr) => {
  arr.forEach((item, index) => (arr[index] = item * new Date()));
  return arr;
};
impure(nums);
// console.log("nums", nums);

// Callbacks
const multiply = (x, y) => x * y;
const multiplied = multiply(5, 4);
console.log("multiplied", multiplied);

const double = (x, callback) => callback(x, 2); // HOF

// Callback #1
const doubled = double(5, multiply);
console.log("doubled", doubled);

// Callback #2
const arrOfNums = [1, 2, 3];
const filteredArrOfNums = arrOfNums.filter((i) => i % 2);
console.log("arrOfNums", arrOfNums);
console.log("filteredArrOfNums", filteredArrOfNums);

// Callbacks #3
window.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    console.log("Clicked!");
  });
});
