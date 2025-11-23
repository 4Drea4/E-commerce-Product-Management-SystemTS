import { NetworkError } from "../utils/errorHandler.js";

  export interface apiProduct{
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

  }
  //fetching the api url 
 
  
  export async function fetchProducts(): Promise<apiProduct[]> {// promise to give an array of products from the api
    try{
        const response = await fetch("https://dummyjson.com/products");//fetch api data
        // check for errors
    if(!response.ok){
        throw new NetworkError("Could not fetch product");
    }
    //parse json
    const data = await response.json(); // returns a promise so I use json
    
    let productDetails = data.products; //get the array
     
    
    console.log(productDetails);
    console.log(data);
    return productDetails;
    } catch(error){
        console.error(error);
        throw error;
    }
  }
  