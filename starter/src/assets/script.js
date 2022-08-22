/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/*\
|*| shopping cart script.js
|*| all resources from udacity
|*| i've accidentally rewritten front.js when pasting my own work from my text editor when trying to edit script.js
|*| (i know i'm stupid lol)
|*| so i've copied the front.js provided in Udacity's github:
|*| https://github.com/udacity/cd2073-intro-to-js-1-project-starter
\*/

/* ================================ *\
	# functions
\* ================================ */

/* functions - misc */
// search item by id
// (not mentioned in the instructions, but would make a whole lot of sense to use this)
function getProduct(id) {
	// go through the product list
	for (product of products) {
		// check for id matches
		if (product.productId === id) {
			// return the found product
			return product;
		}
	}
	// if no product found - return false
	return false;
}

/* functions - cart */
// add product to cart by id
function addProductToCart(id) {
	// get product by id
	const p = getProduct(id);
	if (!p) {
		// product not found - exit function and return false
		return false;
	}
	increaseQuantity(id); // increase quantity by 1
	if (cart.indexOf(p) === -1) {
		// product not already in the cart - add to cart
		cart.push(p);
	}
	// return product
	return p;
}

// increase product quantity by id
function increaseQuantity(id) {
	// get product by id
	const p = getProduct(id);
	if (!p) {
		// product not found - exit function and return false
		return false;
	}
	// increase quantity by 1, return the new value
	return ++p.quantity;
}

// decrease product quantity by id
function decreaseQuantity(id) {
	// get product by id
	const p = getProduct(id);
	if (!p || p.quantity === 0) {
		// product not found, or value already 0 - exit function and return false
		return false;
	}

	// decrease quantity by 1, if new value is 0, remove from cart
	if (--p.quantity === 0) {
		removeProductFromCart(id);
	}
	// return product
	return p.quantity;
}

// remove product from cart by id
function removeProductFromCart(id) {
	// get product by id
	const p = getProduct(id);
	if (!p || cart.indexOf(p) === -1) {
		// product not found, or product exist but not in the cart - exit function and return false
		return false;
	}
	// set quantity to 0
	p.quantity = 0;
	// remove from cart (already confirmed in the above 'if' statement that this product is inside the cart)
	cart.splice(cart.indexOf(p), 1);
	// return product... because... well, why not?
	return p;
}

// empty cart
function emptyCart() {
	// remove intex 0 from the cart until it's empty
	let p;
	while(cart.length > 0) {
		p = cart[0];
		removeProductFromCart(p.productId);
	}
}

/* payment functions */
function cartTotal() {
	let sum = 0;
	// go through the cart items and add their total price
	for (const product of cart) {
		sum += product.price * product.quantity;
	}
	// return the combined sum of the products in the cart
	return sum;
}

// pay
function pay(amount) {
	// add new amount to total paid
	totalPaid += amount;
	// check balance
	const toPay = cartTotal(), // total price of items in cart
		delta = totalPaid - toPay; // check balance
	if (delta >= 0) {
		// customer paid enough- set back to 0 (any extra change is returned)
		totalPaid = 0;
	}
	// return the price difference
	return delta;
}

/* ================================ *\
	# variables
\* ================================ */
const products = [
	{
		name: "Cherry",
		price: 13,
		quantity: 0,
		productId: 101,
		image: "images/cherry.jpg"
	},
	{
		name: "Orange",
		price: 3,
		quantity: 0,
		productId: 102,
		image: "images/orange.jpg"
	},
	{
		name: "Strawberry",
		price: 11,
		quantity: 0,
		productId: 103,
		image: "images/strawberry.jpg"
	}
];

// array of added items
const cart = [];

// total cash paid
let totalPaid = 0;



/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
	To fully complete this project, it is expected that all tests pass.
	Run the following command in terminal to run tests
	npm run test
*/

module.exports = {
	products,
	cart,
	addProductToCart,
	increaseQuantity,
	decreaseQuantity,
	removeProductFromCart,
	cartTotal,
	pay, 
	emptyCart,
	/* Uncomment the following line if completing the currency converter bonus */
	// currency
}