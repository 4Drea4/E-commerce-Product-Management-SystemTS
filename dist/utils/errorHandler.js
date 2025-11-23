export class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}
export class ProductPriceError extends Error {
    constructor(message) {
        super(message);
        this.name = "ProductPriceError";
    }
}
//# sourceMappingURL=errorHandler.js.map