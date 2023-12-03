// Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.

function curry(fn) {
    let args = [];
  
    return function curried(...newArgs) {
      args = [...args, ...newArgs];
  
      if (args.length === fn.length) {
        return fn(...args);
      } else {
        return curried;
      }
    };
  }

  function addTwoNumbers(a, b) {
    return a + b;
  }
  
  const curriedAdd = curry(addTwoNumbers);
  
  console.log(curriedAdd(5)(8)); //Output:13



