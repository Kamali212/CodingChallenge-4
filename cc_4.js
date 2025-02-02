// Task 1 If Statements
let purchaseAmount = 4900; // Declare purchase amount 
let totalAmount = purchaseAmount; // totalAmount after discount 
if (purchaseAmount > 100) {
    totalAmount = purchaseAmount * 0.20;
} // Determine if purchase amount is eligible for discount & calculate total amount after discount 
console.log(`Final amount after discount: $${totalAmount}`); // Log final amount to console

// Task 2 For Loop 

let sales = [30, 58, 20, 12, 46]; // Decale sale amounts in array
let totalSales = 0; // 
for (let i = 0; i < sales.length; i++) {
   totalSales += sales[i];
} // Calculate total sales
console.log(`Total Sale Amount: $${totalSales}`); // Log total sale amount to console

