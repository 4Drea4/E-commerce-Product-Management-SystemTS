import { type apiProduct } from "../services/apiService.js" 

//create the product class where Im storing 
export class Product{
    id: number;
    title: string;
    description: string;
    category:string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail:string;
    images:string[];

    //constructor this.id = api.id giving shape of the info of the product class
    constructor(apiData : apiProduct) {
        this.id = apiData.id;
        this.title = apiData.title ;
        this.description =  apiData.description; 
        this.category = apiData.category;
        this.price = apiData.price;
        this.discountPercentage = apiData.discountPercentage;
        this.rating = apiData.rating;
        this.stock =apiData.stock;
        this.brand = apiData.brand;
        this.thumbnail = apiData.thumbnail ;
        this.images = apiData.images;

    }

//     //displaydetails (id)

displayDetails(): string {
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
    `
}


//     return 
}

// getPriceWithDiscount()
