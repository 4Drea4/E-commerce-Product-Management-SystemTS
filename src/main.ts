import { Product } from "./models/Product.js";
import { fetchProducts } from  "./services/apiService.js" ;
import { calculateTax } from "./utils/taxCalculator.js";
import { NetworkError } from "./utils/errorHandler.js";
import { ProductPriceError } from "./utils/errorHandler.js";

async function main(){
    try{
        //getting data from the api 
        const apiProducts = await fetchProducts();
        // creating a new instance from product
        const testProduct = new Product(apiProducts[0]!);
        // testing error if negative price
        if (testProduct.price <0) {
            throw new ProductPriceError("Products can not be less than zero, sorry about that ");
        } 
        //testing testTax
        const testTax = calculateTax(testProduct);

    console.log(testProduct.displayDetails());
    console.log("Discount: ",testProduct.getPriceWithDiscount());
    console.log("Tax amount of price: ",testTax);

} catch (error) {
    console.error("uh oh your main file is upset");
}}

main();


