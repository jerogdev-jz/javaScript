import products from "./products.js";

console.log(products);
//Intento 3 - Correcto

/* const categoryFiltered = () => {
    const result = products.filter(producto => {
      return producto.category === "home";

    });
    
    return result;
    
}; */

// Versión acortada

/* const categoryFiltered = products.filter(producto => {
      return producto.category === "home";
    }); */
    
// Filter

const categoryFiltered = products.filter(producto => 
    producto.category === "home");

console.log(categoryFiltered);

// Find()

const productFound = products.find(producto =>
    producto.id === 18);

console.log(productFound);

// Map()

const productTitles = products.map(producto =>
    producto.title 
);

const productPrices = products.map(producto =>
    producto.price 
);

const productSummary = products.map(producto => ({
    id: producto.id,
    title: producto.title,
    price: producto.price,
    })
);

console.log(productTitles);
console.log(productPrices)
console.log(productSummary);

// every() + some()

const hasOutOfStock = products.some(producto =>
    producto.stock === 0    
);

const allProductsHsaveStock = products.every(producto => 
    producto.stock > 0  
);

console.log(hasOutOfStock);
console.log(allProductsHsaveStock);

//reduce()

const totalStock = products.reduce((stock, producto) => {
    return stock + producto.stock;
}, 0)

const inventoryValue = products.reduce((valorTotalStock, producto) => {
    return valorTotalStock + (producto.stock * producto.price)
}, 0)

console.log(totalStock);
console.log(inventoryValue);

// findindex()

const productIndex = products.findIndex(producto => 
    producto.id === 15
);

console.log(productIndex);

// sort()

const productsByLowestPrice = [...products];

console.log(productsByLowestPrice);

productsByLowestPrice.sort((a, b) => a.price - b.price);

console.log(productsByLowestPrice);
console.log(products);

const productsByHighestPrice = [...products];

productsByHighestPrice.sort((a, b) => b.price - a.price);
console.log(productsByHighestPrice);