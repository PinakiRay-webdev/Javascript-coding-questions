// Read the md file for question

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
  const grandTotal = orders.map((Element) => {
    let total = Element.items.reduce((acc, num) => acc + num.price, 0);

    if (Element.discountCode) {
      total = parseFloat(applyDiscount(Element.discountCode, total));
    }

    return total;
  });

  return grandTotal.reduce((acc , total) => acc + total);
}


const applyDiscount = (discountCode, total) => {
  switch (discountCode) {
    case "COFFEELOVER": {
      return (total - total * (10 / 100)).toFixed(2);
    }

    case "TEALOVER": {
      return (total - total * (20 / 200)).toFixed(2);
    }

    default: {
      return total.toFixed(2);
    }
  }
};

console.log(totalOrderValue(orders , applyDiscount))
