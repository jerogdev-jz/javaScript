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

// 13 Filtros convinados

const minPrice = 500;
const maxPrice = 1500;

const productsByPrice = products.filter(producto => 
    producto.price >= minPrice && producto.price <= maxPrice
);

console.log(productsByPrice);

// 14 Filtros convinados

    const minRating = 4.6;

    const productsByRating = products.filter(producto => 
        producto.rating >= minRating
    )

    console.log(productsByRating);

// 15 Filtros convinados

const categoria = "eLeCtRoNiCs   ";
const categoriaN = categoria.trim().toLowerCase();
const incluye = "  P";
const incluyeN = incluye.trim().toLowerCase();
const precioMin = 2500;
const precioMax = 25000;
const ratingMin = 4;

const catalogResult = products.filter(producto => 
    producto.category.toLowerCase() === categoriaN)
    .filter(producto =>
        producto.title.toLowerCase().includes(incluyeN))
    .filter(producto => 
        producto.price >= precioMin && producto.price <= precioMax)
    .filter(producto =>
        producto.rating >= ratingMin)
    .sort((a, b) => a.price - b.price);

console.log(products);
console.log(catalogResult);

// 16 Función con parametros

// 17 Evitar dependencia de variables externas

// 18 Desetructuración

// 19 Valores predeterminados

// 20 valores vacios

// 21 Switch

// 22 sin mutación

const filtros = {
    categoriaS: "gAmInG  ",
    texto: "  GaMeR",
    precioMinimo: 500,
    precioMaximo: 35000,
    orden: "price-desc",
    ratingMinimo: 4 
};



function filterCatalog(catalogo, filtros) {
    
    const { 
        categoriaS = "", 
        texto = "", 
        precioMinimo = 0, 
        precioMaximo = Infinity,
        orden,
        ratingMinimo = 0
        } = filtros;

    const categoriaSN = categoriaS.trim().toLowerCase();
    const textoN = texto.trim().toLowerCase();
    
    const resultado = catalogo.filter(producto => 
    categoriaSN === "" ||
    producto.category.toLowerCase() === categoriaSN)
    .filter(producto =>
        producto.title.toLowerCase().includes(textoN))
    .filter(producto =>     
        producto.price >= precioMinimo && producto.price <= precioMaximo)
    .filter(producto =>
        producto.rating >= ratingMinimo);
    let resultadoOrdenado;

switch (orden) {
    case "price-asc":
        resultadoOrdenado = [...resultado].sort(
            (a, b) => a.price - b.price
        );
        break;

    case "price-desc":
        resultadoOrdenado = [...resultado].sort(
            (a, b) => b.price - a.price
        );
        break;

    case "rating-desc":
        resultadoOrdenado = [...resultado].sort(
            (a, b) => b.rating - a.rating
        );
        break;

    default:
        resultadoOrdenado = [...resultado].sort(
            (a, b) => a.price - b.price
        );
        break;
}

return resultadoOrdenado;
}

const catalogoResult = filterCatalog(products, filtros);

console.log(catalogoResult);

