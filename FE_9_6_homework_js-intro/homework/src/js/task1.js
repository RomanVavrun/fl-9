let amount = parseFloat(prompt('Enter amount of money', '0'));
let discount = parseFloat(prompt('Enter discount', '0'));
let saved = null;
let price_with_discount = null;

function amount_check(amount) {
    return typeof amount !== 'number' || amount < 0 || isNaN(amount);
}

function discount_check(discount) {
    return typeof discount !== 'number' || discount < 0 || discount > 100 || isNaN(discount);
}

if (amount_check(amount) || discount_check(discount)) {
    console.log('Invalid data');
} else {
    saved = amount / 100 * discount;
    price_with_discount = amount - saved;

    console.log(`
Price without discount: ${+amount.toFixed(2)}
Discount: ${+discount.toFixed(2)}%
Price with discount: ${+price_with_discount.toFixed(2)}
Saved:  ${+saved.toFixed(2)}
    `);
}