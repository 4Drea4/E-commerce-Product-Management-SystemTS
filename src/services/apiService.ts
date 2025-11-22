
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
  fetch('https://dummyjson.com/products')

  //fetch is promise based either going to reject or resolve so Ill add a then 
    .then(res => res.json())
    .then(console.log);
    