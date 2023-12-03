// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax(income) {
  // Define tax rates and income ranges using a closure
  function taxRate() {
    if (income <= 10000) {
      return 0.1; // 10% tax for income up to 10000
    } else if (income <= 50000) {
      return 0.2; // 20% tax for income up to 50000
    } else {
      return 0.3; // 30% tax for income above 50000
    }
  }

  // Calculate tax amount using the tax rate
  const rate = taxRate();
  const taxAmount = income * rate;

  return taxAmount;
}

// Test the function with various incomes
console.log("Tax for income $5000:", calculateTax(5000)); //Output:500
console.log("Tax for income $25000:", calculateTax(25000));//Output:5000
console.log("Tax for income $75000:", calculateTax(75000));//Output:22500

  