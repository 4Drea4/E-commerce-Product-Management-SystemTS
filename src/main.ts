import { Product } from "./models/Product.js";
import { fetchProducts } from  "./services/apiService.js" ;
import { calculateTax } from "./utils/taxCalculator.js";
import { NetworkError } from "./utils/errorHandler.js";
import { ProductPriceError } from "./utils/errorHandler.js";

async function main(){
    try{
        //getting data from the api 
        const apiProducts = await fetchProducts();
        // new instance
        const testProduct = new Product(apiProducts[0]!);
        const testTax = calculateTax(testProduct);

    console.log(testProduct.displayDetails());
    console.log("Discount: ",testProduct.getPriceWithDiscount());
    console.log("Tax amount of price: ",testTax);

} catch (error) {

    if (testProduct.price <0) {
        throw new ProductPriceError("Products can not be less than zero, sorry about that ");
    }  else{
        console.error("Uh oh Main file is not working", error)
    }
}
}
main();


