// Function Transformations
function add(a, b) {
  return a + b;
}
function mulTow(val) {
  return 2 * val;
}
function square(val) {
  return val * val;
}

function addSquare(a, b) {
  return square(a, b);
}

// const result = add(2, 4);
// console.log(square(result));

function compose(f1, f2, f3) {
  return function (a, b) {
    return f3(f2(f1(a, b)));
  };
}

const composeTow = (f1, f2, f3) => (a, b) => f3(f2(f1(a, b)));
const result = compose(add, mulTow, addSquare);

console.log(result(4, 4));

// compose unlimit function

function name(functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}

var argumentsLength = (...args) => args.length;
// var argumentsLength = function (...args) args.length;

// 2666. Allow One Function Call

var once = function (fn) {
  let called = false;
  return function (...args) {
    if (called) return undefined;
    called = true;
    return fn(...args);
  };
};
