import {} from "../services/apiService.js";
//create the product class where Im storing 
export class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    rating;
    stock;
    brand;
    thumbnail;
    images;
    //constructor this.id = api.id giving shape of the info of the product class
    constructor(apiData) {
        this.id = apiData.id;
        this.title = apiData.title;
        this.description = apiData.description;
        this.category = apiData.category;
        this.price = apiData.price;
        this.discountPercentage = apiData.discountPercentage;
        this.rating = apiData.rating;
        this.stock = apiData.stock;
        this.brand = apiData.brand;
        this.thumbnail = apiData.thumbnail;
        this.images = apiData.images;
    }
}
// //call discount percentage 
// getPriceWithDiscount()
// //call it outside the template
// //let 
//# sourceMappingURL=Product.js.map