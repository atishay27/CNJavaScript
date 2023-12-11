//Complete the totalorderValue function
// Do not alter the starter code
const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 },
    ],
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 },
    ],
    discountCode: "COFFEELOVER",
  },
];
function totalOrderValue(orders, applyDiscount) {
  let totalVal = orders
    .map((order) => {
      let total = order.items.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
      if (order.discountCode) {
        return applyDiscount(total, order.discountCode);
      }
      return total;
    })
    .reduce((total, val) => total + val);
  return totalVal.toFixed(2);
  //Implement your function here
  //The function should return the total price after applying the discount.
}

function applyDiscount(total, code) {
  if (code === "COFFEELOVER") {
    total = total * 0.9;
  } else if (code === "TEALOVER") {
    total = total * 0.8;
  }
  return total;
}
//define your callback function here to calculate the discount.
console.log(totalOrderValue(orders, applyDiscount));
