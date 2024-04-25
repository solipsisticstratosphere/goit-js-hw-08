function calculateTotal(number) {
  let sum = 0;
  let smth = 1;
  while (smth <= number) {
    sum += smth;
    smth += 1;
  }
  return sum;
}

console.log(calculateTotal(18)); // "You ordered 5 droids worth 15000 credits!"
