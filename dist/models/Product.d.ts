import { type apiProduct } from "../services/apiService.js";
export declare class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    images: string[];
    constructor(apiData: apiProduct);
}
//# sourceMappingURL=Product.d.ts.map