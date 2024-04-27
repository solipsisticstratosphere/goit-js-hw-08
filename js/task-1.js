function calculateTotalPrice(order) {
  let sh = 0;
  for (let sum of order) {
    sh += sum;
  }
  return sh;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
