// array, მასივი
// object, ობიექტი
// function, ფუნქცია

// console.log("hello, world!");console.log("hello, world!");

// const product1 = 100;
// const product2 = 200;
// const product3 = 300;

const prices = [300, 100, , 300, 500, 200];
const myArr = ["hello", 100, true, 500, null, undefined, [1, 2, 3, [4, 5]]];
const myArr2 = [
	[1, [2, 3]],
	[3, 4],
	[5, 6],
];
const a = 0;
// console.log(myArr, myArr[6][3][1]);
const firstPrice = prices[a];
const myArr2Length = myArr2.length; //property
// console.log() //method , function

// console.log(myArr2[myArr2.length - 1], myArr2.at(-1));
// console.log(prices);
const newLn = prices.push(300);
// console.log(prices, newLn);
const removedLast = prices.pop();
// console.log(prices, removedLast);
const newLen2 = prices.unshift(900);
// console.log(prices, newLen2);
const removedFirstEl = prices.shift();
// console.log(prices, removedFirstEl);

const product1 = {
	price: 1000,
	memory: "16GB",
	storage: "512GB",
	isAvailable: false,
	shops: [],
};

const product2 = {
	price: 1000,
	memory: "16GB",
	storage: "512GB",
	isAvailable: true,
	shops: [
		{ name: "tbilisi1", location: "map tbilisi 1" },
		{ name: "tbilisi 2", location: "map tbilisi 2" },
	],
};

const propertyName = "memory";
product2.storage = "1TB";
product2.model = "MacBook Pro";
delete product2.memory;

// console.log(product2);
// console.log(product2[propertyName]);

// console.log(product2.isAvailable);
// console.log(product2.shops[a].location);

const products = [
	product1,
	product2,
	{
		price: 1000,
		memory: "16GB",
		storage: "512GB",
		isAvailable: false,
		shops: [],
	},
	{
		price: 1500,
		memory: null,
		storage: "",
		isAvailable: false,
		shops: [],
	},
];

// console.log(products);

let model1 = "MacBook Pro";
let model2 = model1;

// console.log(model1, model2);

model1 = "MacBook Air";
model2 = model2 + " 2023";
// console.log(model1, model2);

const phone1 = {
	model: "iPhone 14",
	color: "black",
};
const phone2 = { ...phone1 };
console.log(phone1, phone2);

phone2.memory = "128GB";
console.log(phone1, phone2);

console.error("this is an error message");
console.warn("this is a warning message");
console.info("this is an informational message");
console.table(products);
console.table(prices);
// alert("this is an alert message");
