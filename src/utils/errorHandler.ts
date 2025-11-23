export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name ="NetworkError";
    }
}

export class productPriceError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ProductPriceError";
    }
}