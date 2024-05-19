function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  const smth = [];
  for (let product of products) {
    smth.push(product[propName]);
  }
  return smth;
}

console.log(getAllPropValues('name')); // "arrays-for-begginers"
