//fetching the api url 
export async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products"); //fetch api data
        // check for errors
        if (!response.ok) {
            throw new Error("Could not fetch product");
        }
        //parse json
        const data = await response.json(); // returns a promise so I use json
        let productDetails = data.products; //get the array
        console.log(productDetails);
        console.log(data);
        return productDetails;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
//# sourceMappingURL=apiService.js.map