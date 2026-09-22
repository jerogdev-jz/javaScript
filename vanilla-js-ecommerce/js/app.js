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
    
// 1 Filter

const categoryFiltered = products.filter(producto => 
    producto.category === "home");

console.log(categoryFiltered);

// 2 Find()

const productFound = products.find(producto =>
    producto.id === 18);

console.log(productFound);

// 3 Map()

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

// 4 every() + some()

const hasOutOfStock = products.some(producto =>
    producto.stock === 0    
);

const allProductsHsaveStock = products.every(producto => 
    producto.stock > 0  
);

console.log(hasOutOfStock);
console.log(allProductsHsaveStock);

// 5 reduce()

const totalStock = products.reduce((stock, producto) => {
    return stock + producto.stock;
}, 0)

const inventoryValue = products.reduce((valorTotalStock, producto) => {
    return valorTotalStock + (producto.stock * producto.price)
}, 0)

console.log(totalStock);
console.log(inventoryValue);

// 6 findindex()

const productIndex = products.findIndex(producto => 
    producto.id === 15
);

console.log(productIndex);

// 8 sort()

const productsByLowestPrice = [...products];

console.log(productsByLowestPrice);

productsByLowestPrice.sort((a, b) => a.price - b.price);

console.log(productsByLowestPrice);
console.log(products);

const productsByHighestPrice = [...products];

productsByHighestPrice.sort((a, b) => b.price - a.price);
console.log(productsByHighestPrice);

// 9 includes()

const searchResults = products.filter(porducto =>
    porducto.title.includes("LED")
);

console.log(searchResults);

// 10 includes() + toLowerCase()

const input = "CaFeTeRa"

const searchResultsTwo = products.filter(producto =>
    producto.title.toLowerCase().includes(input.toLowerCase())
);

console.log(searchResultsTwo);

// 11 trim()

const inputTwo = "    CaFeTeRa     "
const normalizedInputTow = inputTwo.trim().toLowerCase()

const searchResultsThree = products.filter(producto =>
    producto.title.toLowerCase().includes(normalizedInputTow)
);

console.log(searchResultsThree);

// 12 Filtros convinados

const cat = "Home"
const word = "Cafetera"

const catN = cat.toLocaleLowerCase().trim()
const wordN = word.toLocaleLowerCase().trim()

const filteredCatalog = products.filter(producto => 
        producto.category.toLocaleLowerCase() === catN)
        .filter(porducto => 
        porducto.title.toLocaleLowerCase().includes(wordN))
        .sort((a, b) => a.price - b.price);


console.log(filteredCatalog);
console.log(products);