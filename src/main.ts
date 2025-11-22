import { Product } from "./models/Product.js";
import { fetchProducts } from  "./services/apiService.js" ;

async function main(){
    try{
        //getting data from the api 
        const apiProducts = await fetchProducts();
        // new instance
        const testProduct = new Product(apiProducts[0]!);
   
    console.log(testProduct.displayDetails());
    console.log("Discount: ",testProduct.getPriceWithDiscount());
} catch (error) {
    console.error("This is from main", error);
}}

main();