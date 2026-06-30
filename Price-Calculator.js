function calculateDiscount(price, discountPercent){
    return price * (discountPercent / 100);
}

function calculateTax(priceAfterDiscount, taxPercent){
    return priceAfterDiscount * (taxPercent / 100);
}

function calculateFinalPrice(price, discountPercent, taxPercent){
    // calculate discount and price after discount
    const discount = calculateDiscount(price, discountPercent)
    const priceAfterDiscount = price - discount;
    // calculate tax
    const tax = calculateTax(priceAfterDiscount, taxPercent);
    // returning the value
    return priceAfterDiscount + tax;
}

function createPriceSummary(price, discountPercent, taxPercent){
    // calculate discount and price after discount
    const discount = calculateDiscount(price, discountPercent);
    const priceAfterDiscount = price - discount;
    // calculate tax
    const tax = calculateTax(priceAfterDiscount, taxPercent);
    // calculate final price
    const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);
    // returning the value
    return {price, discount, tax, finalPrice};
}


// Sample checks:

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));


/*Expected output:

console.log({ price: 100, discount: 20, tax: 8, finalPrice: 88 },
{ price: 200, discount: 50, tax: 7.5, finalPrice: 157.5 },
{ price: 50, discount: 0, tax: 5, finalPrice: 55 })
*/