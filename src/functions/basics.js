// Higher Order Function
const modify = (x, action) => action(x);
const modified = modify(5, (x) => x * 2);
console.log("modified", modified);

// Curring
const curring = (x) => (y) => x + y;
const curried = curring(5)(4);
console.log("curried", curried);

// Impure function & side effects
const nums = [1, 2, 3];
const impure = (arr) => {
  arr.forEach((item, index) => (arr[index] = item * new Date()));
  return arr;
};
impure(nums);
console.log("nums", nums);
