/*
  #1 Storing functions in variables
*/

function add(a, b) {
  return a + b;
}

const functionInVariable = add;

let twoPlusTwoEquals = functionInVariable(2, 2);
console.log(twoPlusTwoEquals); // 4

/* 
  #2 Passing a function to another function
*/

function average(a, b, callback) {
  return callback(a, b) / 2;
}

let result = average(10, 20, add);
console.log(result); // 15

/*
  #3 Returning functions from functions
*/

function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName];
    let y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}

let products = [
  { name: 'book', price: 40 },
  { name: 'juice', price: 4 },
  { name: 'canvas', price: 69 },
];

console.table(products.sort(compareBy('price')));
/*
index  |  name  |  price
  0	     'juice'    4
  1	     'book'	    40
  2	     'canvas'	  69
*/

/*
  #4 Storing functions in an object or an array
*/

let obj = { doSomething : function() { /* ... */ } };
([]).push(function doSomething() { /* ... */ });
