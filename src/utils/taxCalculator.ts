// This function should return the dollar amount that a product is taxed at. 

import { Product } from "../models/Product.js"
import { fetchProducts } from "../services/apiService.js";
// Create a calculateTax() function to handle tax calculations for products.

export function calculateTax(product: Product):number { //take in a product object from api 

 //see what tax to use
 let beTaxed :number;

 if(product.category === "groceries" ){
   beTaxed = product.price * (3/100);
} else {
    beTaxed = product.price * (4.75/100);
}
   
return beTaxed;

} 

//  //testing to make sure it returnd tax amount 

// async function testTax(){
    
//     //getting data from the api 
//         const apiProducts = await fetchProducts();
//     // new instance
//         const testProduct = new Product(apiProducts[0]!);
//     //test tax method
//         const testTax = calculateTax(testProduct);

    
//     console.log("Tax amount of price: ",testTax);

// };
// testTax();



