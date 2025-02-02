// Task 1 If Statements
let purchaseAmount = 4900; // Declare purchase amount 
let totalAmount = purchaseAmount; // totalAmount after discount 
if (purchaseAmount > 100) {
    totalAmount = purchaseAmount * 0.20;
} // Determine if purchase amount is eligible for discount & calculate total amount after discount 
console.log(`Final amount after discount: ${totalAmount}`); // Log final amount to console

// Task 2 For Loop 

let sales = [30, 58, 20, 12, 46]; // Decale sale amounts in array
let totalSales = 0; // 
for (let i = 0; i < sales.length; i++) {
   totalSales += sales[i];
} // Calculate total sales
console.log(`Total Sale Amount: ${totalSales}`); // Log total sale amount to console

// Task 3 While Loop
let stock = 10; 
while (stock > 0) {
    console.log("Stock is", stock);
    stock--; 
} // Decrease count by 1 until stock reaches 0

// Task 4 Do... While Loop
let responses = 0;
do {
    console.log(`User Response: ${responses}`)
    responses ++;

} while (responses < 3) // Collect user responses until response count reaches 3 

// Task 5 For...In Loop 

let employee = {
    name: "Alice", 
    position: "Manager", 
    salary: 75000}
for (let property in employee ) {
    console.log(`${property}: ${employee[property]}`); // Declare object and use for in loop to iterate over each property 
}

// Task 6 For...Of Loop 
let products = ["Speakers", "Vinyl", "Record Player"]; // Product list
for (let product of products) {
    console.log(`Products: ${product}`); // log product to console
}

