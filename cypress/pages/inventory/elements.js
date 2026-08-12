export const elements = {
    addToCart: (itemName) => `[data-test="add-to-cart-${transformText(itemName)}"]`,
    removeFromCart: (itemName) => `[data-test="remove-${transformText(itemName)}"]`,
    sortDropdown: '[data-test="product-sort-container"]',
    itemNames: '.inventory_item_name',
    itemPrices: '.inventory_item_price',
    backToProducts: '[data-test="back-to-products"]'
}

function transformText(texto){
    return texto.replaceAll(' ', '-').toLowerCase()
}