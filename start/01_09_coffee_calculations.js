// Write your code here
const getTotalCoffeePrice = (intArray) => {
  const coffeePrice = 1.25;

  let total = intArray.reduce(getTotal, 0);

  function getTotal(total, num) {
    return total + (num*coffeePrice);
  }

  return `The total bill is ${total}`;
}

console.log(getTotalCoffeePrice([2,3,1,5]));