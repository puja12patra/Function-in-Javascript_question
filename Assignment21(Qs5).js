// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
      return 1;
    }
  
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
  

  console.log(factorial(0)); // Output: 1
  console.log(factorial(1)); // Output: 1
  console.log(factorial(5)); // Output: 120
  console.log(factorial(10)); // Output: 3628800
  