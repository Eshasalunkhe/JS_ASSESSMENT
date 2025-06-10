function multiply(a, b) {
  return a * b;
}
function calculateTotal(price, quantity) {
  const total = multiply(price, quantity);
  console.log("Total amount is: " + total);
}

calculateTotal(22, 4); 
