import products from "./products.js";

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
    
// Versión arrow function

const categoryFiltered = products.filter(producto => 
    producto.category === "home");

// Find()

const productFound = products.find(producto =>
    producto.id === 18);

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

console.log(products);
console.log(categoryFiltered);
console.log(productFound);
console.log(productTitles);
console.log(productPrices)
console.log(productSummary);