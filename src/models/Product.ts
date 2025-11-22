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
//     console.log(product);
//     //method 
//     //displaydetails (id)
//     //fetch
//     //using async on the method used in api Service for the interface apiProduct 
// fetch displayDetails() {


//     return 
}



  

// //call discount percentage 
// getPriceWithDiscount()

// //call it outside the template
// //let 