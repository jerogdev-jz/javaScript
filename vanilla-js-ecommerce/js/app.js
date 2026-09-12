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

console.log(products);
console.log(categoryFiltered);

