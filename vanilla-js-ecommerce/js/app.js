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

// 23 Copia de arrays vs copia de objetos (.map())

const discountedProducts = products.map(producto => ({
    ...producto,
    price: producto.featured
        ? producto.price * .90
        : producto.price
}));

console.log(products);
console.log(discountedProducts);

// 24 .map() para actualizar elemento especifico

const productIdToUpdate = 17;
const newStock = 26;

const updatedStockProducts = products.map(producto => ({
    ...producto,
    stock: producto.id === productIdToUpdate
        ? newStock
        : producto.stock
}));

console.log(products);
console.log(updatedStockProducts);

// 25 .map() modificando a partir del valor anterior

const productIdToRestock = 18;

const incomingStock = 10;

const restockedProducts = products.map(producto => ({
    ...producto,
    stock: producto.id === productIdToRestock
        ? producto.stock + incomingStock
        : producto.stock
    
}));

console.log(products);
console.log(restockedProducts);

// 26 .map() añadiendo una propiedad derivada

const productWithAvailability = products.map(producto => ({
    ...producto,
    availability: producto.stock > 0
        ? "in-stock"
        : "out-of-stock"
}));

console.log(products);
console.log(productWithAvailability);

// 27 funciones puras

function getAvailability(stockP) {
        if (stockP > 0) {
            return "in-stock"
        } else {
            return "out-of-stock"
        };
};

const productWithAvailabilityTwo = products.map(producto => ({
    ...producto,
    availability: getAvailability(producto.stock)
}));

console.log(products);
console.log(productWithAvailabilityTwo);

// 28 Funcion descuentos

function calculateDiscount(precio, porcentajeDescuento) {
    return precio * (1 - porcentajeDescuento)
}

const discountedProductsTwo = products.map(producto => ({
    ...producto,
    price: producto.featured
        ? calculateDiscount(producto.price, .10)
        : producto.price
}));

console.log(products);
console.log(discountedProductsTwo);

// 29 Composición de funciones

const processedProducts = products.map(producto => ({
    ...producto,
    availability: getAvailability(producto.stock),
    finalPrice: producto.featured
        ? calculateDiscount(producto.price, .10)
        : producto.price
}));

console.log(products);
console.log(processedProducts);

// 30 funcion como callback de .map

function processProduct(producto) {
    return {
        ...producto,
        availability: getAvailability(producto.stock),
        finalPrice: producto.featured
            ? calculateDiscount(producto.price, .10)
            : producto.price
    }
};

const processedProductsTwo = products.map(processProduct);

console.log(products)
console.log(processedProductsTwo)

// 31 reduce() con objetos

const cart = [
    {
        id: 1,
        title: "pay de queso",
        price: 35,
        quantity: 7,
    },
    {
        id: 2,
        title: "pay de oreo",
        price: 38,
        quantity: 3, 
    },
    {
        id: 3,
        title: "pay de limón",
        price: 30,
        quantity: 2,
    },
    {
        id: 4,
        title: "pay de cajeta",
        price: 40,
        quantity: 1,
    }
];

const cartSubtotal = cart.reduce((subtotal, carro) => {
    return subtotal + (carro.price * carro.quantity)
}, 0);

console.log(cart);
console.log(cartSubtotal);

// 32 reduce() para copntar unidades

const cartItemCount = cart.reduce((piezas, elemento) => {
    return piezas + elemento.quantity 
}, 0);

console.log(cart);
console.log(cartItemCount);

// 33 reduce() con objeto qacumulador

const cartSummary = cart.reduce((acumulador, carro) => { 
       acumulador.subtotal = acumulador.subtotal + (carro.price * carro.quantity);
       acumulador.itemCount = acumulador.itemCount + carro.quantity;
        return acumulador;
}, {
    subtotal: 0,
    itemCount: 0,
});

console.log(cart);
console.log(cartSummary);

// 34 reduce() sin modificar acumulador

const cartSummaryInmutable = cart.reduce((acumulador,carro) => {
    return {
        subtotal: acumulador.subtotal + (carro.quantity * carro.price),
        itemCount: acumulador.itemCount + carro.quantity
    }
}, {
    subtotal: 0,
    itemCount: 0,
})

console.log(cart);
console.log(cartSummaryInmutable);

// 35 reduce() para agrupar datos

const productsByCategory = products.reduce((acumulador, producto) => {
    const categoria = producto.category;
    acumulador[categoria] = (acumulador[categoria] || 0) + 1;
    return acumulador;
}, {});

console.log(cart);
console.log(productsByCategory);

// 36 reduce() para sumar por categoria

const stockByCategory = products.reduce((acumulador, producto) => {
    const categoria = producto.category;
    acumulador[categoria] = (acumulador[categoria] || 0) + producto.stock;
    return acumulador;
}, {});

console.log(cart);
console.log(stockByCategory);

// 37 reduce() para resumen completo

const categorySummary = products.reduce((acumulador, producto) => {
    const categoria = producto.category;
    if (!acumulador[categoria]) {
        acumulador[categoria] = {
            productCount: 0,
            totalStock: 0,
        };
    }

    acumulador[categoria].productCount += 1;
    acumulador[categoria].totalStock += producto.stock;

    return acumulador;

}, {});

console.log(cart);
console.log(categorySummary);

// 38 reduce() para calcular promedios

const categoryPriceSummary = products.reduce((acumulador, producto) => {
    const categoria = producto.category;
    if (!acumulador[categoria]) {
        acumulador[categoria] = {
            totalPrice: 0,
            productCount: 0,
        };
    }

    acumulador[categoria].totalPrice += producto.price; 
    acumulador[categoria].productCount += 1;
        
    return acumulador;

}, {});

Object.values(categoryPriceSummary).forEach(valor => {
    valor.averagePrice = valor.totalPrice / valor.productCount;
});

console.log(categoryPriceSummary);

// 39 Convertir resumen en funcion pura

function calculateCartSummary(carro) {
    return carro.reduce((acumulador, elemento) => {
        return {
            subtotal: acumulador.subtotal + (elemento.price * elemento.quantity),
            itemCount: acumulador.itemCount + elemento.quantity,
        }
    }, {
        subtotal: 0,
        itemCount: 0,
    })
};

const cartSummaryResult = calculateCartSummary(cart);

console.log(cartSummaryResult);

// 40 Separacion por funciones

function sortProducts(catalogo, orden) {
        const copiaCatalogo = [...catalogo];
    
        switch (orden) {
            case "price-asc":
                copiaCatalogo.sort(
                    (a, b) => a.price - b.price
                );
                break;

            case "price-desc":
                copiaCatalogo.sort(
                    (a, b) => b.price - a.price
                );
                break;

            case "rating-desc":
                copiaCatalogo.sort(
                    (a, b) => b.rating - a.rating
                );
                break;

            default:
                copiaCatalogo.sort(
                    (a, b) => a.price - b.price
                );
                break;
        }

        return copiaCatalogo
    };

const filtrosD = {
    categoriaS: "gAmInG  ", 
    texto: "  GaMeR",
    precioMinimo: 500,
    precioMaximo: 35000,
    orden: "price-desc",
    ratingMinimo: 4 
};

function filterCatalogTwo(catalogo, filtros) {
    
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
    
    return sortProducts(resultado, orden);

}

const catalogoResultD = filterCatalogTwo(products, filtrosD);

console.log(catalogoResultD);

// 41 Separar la normalización de textos

