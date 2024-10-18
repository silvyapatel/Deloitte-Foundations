let sharePrice = 10_00_000
console.log(sharePrice);
console.log(typeof sharePrice);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

let quantity = "123"
console.log(typeof quantity);
quantity = Number(quantity);
console.log(typeof quantity);
console.log(quantity);

let price = "123 vishwas";
price = Number(price);
console.log(price);

let price1 = "123.45";
console.log(typeof price1);

let istrue = Boolean(0);
console.log(istrue)

let price2 = 2356;
price2 = String(price2);
console.log(price2);
console.log(typeof price2);


let x = "10.45";
let y = 20;
let z = x + y;
console.log(z);


let x1 = 45
let x2 = x1--;
console.log(x1);
console.log(x2);

x = 10
console.log("x "+x);
console.log("y "+y);
x += 1;
y -= 1;

console.log("x "+x);
console.log("y "+y);

let k = "12345 vishwas "
let k1 = parseInt(k) //converts first argument to string and then returns interger or NaN
let k2 = Number(k)
console.log("k1 "+k1);
console.log("type of k1 "+typeof k1);

console.log("k2 "+k2);
console.log("type of k2 "+typeof k2);