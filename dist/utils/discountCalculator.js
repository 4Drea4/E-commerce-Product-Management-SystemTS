console.log("I am running");
import { Product } from "../models/Product.js";
import { fetchProducts } from "../services/apiService.js";
// Create a calculateDiscount() function to handle discount calculations for products.
export function calculateDiscount(product) {
    let priceOfDiscount = product.price * (product.discountPercentage / 100);
    return priceOfDiscount;
}
//testing to make sure it return discount 
async function testDiscount() {
    //getting data from the api 
    const apiProducts = await fetchProducts();
    // new instance
    const testProduct = new Product(apiProducts[0]);
    //test calculateDiscount method
    const discountPrice = calculateDiscount(testProduct);
    console.log("Discount amount of price: ", discountPrice);
}
;
testDiscount();
//# sourceMappingURL=discountCalculator.js.map