export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name ="NetworkError";
    }
}

export class ProductPriceError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ProductPriceError";
    }
}