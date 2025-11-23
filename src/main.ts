import { Product } from "./models/Product.js";
import { fetchProducts } from  "./services/apiService.js" ;
import { calculateTax } from "./utils/taxCalculator.js";

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
    console.error("This is from main", error);
}}

main();


