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
    //     //displaydetails (id)
    displayDetails() {
        return `
    Product ID: ${this.id}
    Product Name: ${this.title}
    Product Description: ${this.description}
    Category: ${this.category}
    Price: ${this.price}
    Discount: ${this.discountPercentage}
    Review Rating: ${this.rating}
    In stock: ${this.stock}
    Company Brand:${this.brand}
   Thumbnail:${this.thumbnail}
    Picture: ${this.images}
    `;
    }
    getPriceWithDiscount() {
        let discount = this.price * (this.discountPercentage / 100);
        const finalPrice = this.price - discount;
        return finalPrice;
    }
}
//# sourceMappingURL=Product.js.map