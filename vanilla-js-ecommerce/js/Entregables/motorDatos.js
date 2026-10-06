// llamada a base de datos con 40 productos

import products from "../products.js";

// Constantes para el entregable

const filtros = { categoria: "   GaMiNg", titulo: "gAmEr   ", precioMin: 500, precioMax: 50000, orden: "price-desc", ratingMin: 4,};


// Funcion para normalizar texto

function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
};

// Funcion para buscar porductos por titulo

function buscarTitulo(catalogo, tituloNormalizado) {
    
        return catalogo.filter(producto => {
            return normalizarTexto(producto.title).includes(tituloNormalizado)
    });

};

// Funcion para encontrar producto por ID

function buscarId (catalogo, id) {

    const filtradoId = catalogo.find(producto =>
        producto.id === id
    );

    return filtradoId;

};

// Función para detectar disponibilidad

function verificarDisponibilidad(piezas) {
    return piezas > 0
        ? "in-stock"
        : "out-of-stock"
};

// Función para calcular descuento

function calcularDescuento (precio, porcentaje) {
    return precio * (1 - porcentaje)
};

// Función para agregar availability y finalPrice

function procesamientoProductos(catalogo) {
    const catalogoProcesado =catalogo.map(producto => ({
        ...producto,
        availability: verificarDisponibilidad(producto.stock),
        finalPrice: producto.featured
            ? calcularDescuento(producto.price, .10)
            : producto.price
    }));

    return catalogoProcesado
};

// Función para ordenar productos 

function ordenarProductos(catalogo, orden) {
    
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

// Resumen del catálogo por categoría que incluya al menos (cantidad de prodcutos, stock total, precio promedio)

function resumenCatalogo (catalogo) {
    const resumen = catalogo.reduce((acumulador, producto) => {
        const categoria = producto.category;
        if (!acumulador[categoria]) {
            acumulador[categoria] = {
                totalPrecio: 0,
                totalProductos: 0,
                totalStock: 0,
            };
        }

        acumulador[categoria].totalPrecio += producto.price;
        acumulador[categoria].totalProductos += 1;
        acumulador[categoria].totalStock += producto.stock;

        return acumulador;
    }, {});

    Object.values(resumen).forEach(valor => {
        valor.promedio = valor.totalPrecio / valor.totalProductos;
    });

    return resumen;
};

// Función filtradora

function filtrarCatalogo(catalogo, filtros) {

const {
    categoria = "",
    titulo = "",
    precioMin = 0,
    precioMax = Infinity,
    orden,
    ratingMin = 0
} = filtros;
const categoriaNormalizada = normalizarTexto(categoria);
const tituloNormalizado = normalizarTexto(titulo);

// Filtrar por titulo

const resultadoFiltrado = buscarTitulo(catalogo, tituloNormalizado)

// Filtrar por categoria 

   .filter(producto =>
    categoriaNormalizada === "" || normalizarTexto(producto.category) === categoriaNormalizada)
           
// Filtrar por precio mínimo y maximo

        .filter(producto =>
            producto.price >= precioMin && producto.price <= precioMax)

// Filtrar por rating mínimo
        
        .filter(producto =>
            producto.rating >= ratingMin)

// Ordenar por precio (ascendente y descendente ) y por rating descendente (Inmutabilidad)

        return ordenarProductos(resultadoFiltrado, orden);
};



// Función principal que reciba catálogo + filtros devuelve catalogo filtrado, ordenado y procesado

function procesadorCatalogo(catalogo, filtros) {

    const catalogoFiltrado = filtrarCatalogo(catalogo, filtros);
    return procesamientoProductos(catalogoFiltrado);

};

// Función para carrito (calcula resumen con subtotal e itemCount)

const carrito = [
    {
        id: 5,
        title: "Monitor Vision 27 4K",
        price: 7499,
        quantity: 2,
    },
    {
        id: 10,
        title: "Tenis Runner Air",
        price: 2199,
        quantity: 3, 
    },
    {
        id: 24,
        title: "Control Gamer Phantom Pro",
        price: 1599,
        quantity: 2,
    },
    {
        id: 39,
        title: "Robot Programable RoboKid",
        price: 1899,
        quantity: 1,
    }
];

function resumenCarrito(carrito) {
    return carrito.reduce((acumulador, elemento) => {
        return {
            subTotal: acumulador.subTotal + (elemento.price * elemento.quantity),
            itemCount: acumulador.itemCount + elemento.quantity,
        }
    }, {
        subTotal: 0,
        itemCount: 0,
    })
};



// Console Log

console.log(procesadorCatalogo(products, filtros));
console.log(resumenCarrito(carrito));
console.log(buscarId(products, 10));
console.log(resumenCatalogo(products));