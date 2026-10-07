import products from "../products.js";

function buscarId (catalogo, id) {

    const filtradoId = catalogo.find(producto =>
        producto.id === id
    );

    return filtradoId;

};

// Scope 44

function analizarProducto(producto) {
    const impuesto = 0.16;

    if (producto.price > 1000) {
        const mensaje = "Producto de precio alto";

        console.log(producto.title);
        console.log(impuesto);
        console.log(mensaje);
    }

    console.log(impuesto);
    console.log(mensaje);
};

const productoElegido = buscarId(products, 34);

// analizarProducto(productoElegido);

//
// Sombreado de variables 45
//

const descuento = .10;

function calcularPrecioEspecial(precio) {
    const descuento = .20;

    const precioFinal = precio * (1 - descuento);

    console.log(descuento);
    console.log(precioFinal);
};

//calcularPrecioEspecial(productoElegido.price);
//console.log(descuento);

//
// Referencia en objetos 46
//

const productoOriginal = buscarId(products, 34);

const prodcutoReferencia = productoOriginal;

console.log(productoOriginal.stock);
console.log(prodcutoReferencia.stock);

prodcutoReferencia.stock = 999;

console.log(productoOriginal.stock);
console.log(prodcutoReferencia.stock);

const productoCopia = {
    ...productoOriginal
};

productoCopia.stock = 500;

console.log(productoOriginal.stock);
console.log(productoCopia.stock);

//
// Spread y copia superficial (shallow copy) 47
//