/*
  #1 Invoking constructors
*/

// arrow function
const Car = (color) => {
  this.color = color;
};

const yellowCar = new Car('yellow'); // TypeError: Car is not a constructor

// regular function
function Car(color) {
  this.color = color;
}

const yellowCar = new Car('yellow'); // Car {color: 'yellow'}

/*
  #2 Defining methods on an object
*/

// arrow function
const calculate = {
  array: [1, 2, 3],
  sum: () => {
    console.log(this === window); // true
    return this.array.reduce((result, item) => result + item);
  }
};

calculate.sum(); // TypeError: Cannot read property 'reduce' of undefined

// regular function
const calculate = {  
  array: [1, 2, 3],
  sum() {
    console.log(this === window); // false
    return this.array.reduce((result, item) => result + item);
  }
};

calculate.sum(); // 6

/*
  #3 Object prototype
*/

// arrow function
function Cat(name) {
  this.name = name;
}

Cat.prototype.sayName = () => {
  console.log(this === window); // true
  return this.name;
};

const cat = new Cat('Rubens');
cat.sayName(); // undefined

// regular function
function Cat(name) {
  this.name = name;
}

Cat.prototype.sayName = function() {
  console.log(this === window); // false
  return this.name;
};

const cat = new Cat('Rubens');
cat.sayName(); // Rubens

/*
  #4 Callback functions with dynamic context
*/

// arrow function
const button = document.getElementById('button');

button.addEventListener('click', () => {
  console.log(this === window); // true
  this.innerHTML = 'Button has been clicked!';
});

// regular function
const button = document.getElementById('button');

button.addEventListener('click', function() {
  console.log(this === window); // false
  this.innerHTML = 'Button has been clicked!';
});