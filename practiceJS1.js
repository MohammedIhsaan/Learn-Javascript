/////// Find total Price of products

let products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];
////////// Method 1
let countByMethod1 = 0;

for (let i = 0; i < products.length; i++) {
  let eachProduct = products[i];

  let indexNo = eachProduct.indexOf(":");
  console.log(indexNo);

  let price = eachProduct.slice(indexNo + 1);
  console.log(Number(price));

  countByMethod1 += Number(price);
}
let totalByM1 = countByMethod1.toFixed(2);
console.log("By Method 1", totalByM1);

//////////// Method 2
let countByMethod2 = 0;
products.forEach((product) => {
  let indexNo = product.indexOf(":");
  console.log(indexNo);

  let subProduct = product.split(":");

  console.log(subProduct[1]);
  let eachProductPrice = subProduct[1];

  countByMethod2 += Number(eachProductPrice);
});

let totalByM2 = countByMethod2.toFixed(2);
console.log("By Method 2", totalByM2);
