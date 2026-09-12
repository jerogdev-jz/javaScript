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

const productFound = products.find(producto =>
    producto.id === 18);


console.log(products);
console.log(categoryFiltered);
console.log(productFound);
