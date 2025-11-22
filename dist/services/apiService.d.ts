export interface apiProduct {
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
}
export declare function fetchProducts(): Promise<apiProduct[]>;
//# sourceMappingURL=apiService.d.ts.map