// This function should return the dollar amount that a product is taxed at. For example, if a product costs 
// 100 and is taxed at 10 100andistaxedat1010.
// Note that the product data returned from the API does not include a taxPercentage field like it includes a discountPercentage field. Apply a default standard tax rate of 4.75% to each product; however, products with a category of “groceries” should only be taxed at 3%.

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

 //testing to make sure it returnd tax amount 

async function testTax(){
    
    //getting data from the api 
        const apiProducts = await fetchProducts();
    // new instance
        const testProduct = new Product(apiProducts[0]!);
    //test tax method
        const testTax = calculateTax(testProduct);

    
    console.log("Tax amount of price: ",testTax);

};
testTax();



