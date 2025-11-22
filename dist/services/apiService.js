//fetching the api url 
fetch('https://dummyjson.com/products')
    //fetch is promise based either going to reject or resolve so Ill add a then and catch
    .then(res => res.json())
    .catch(error => console.error(error));
export {};
//# sourceMappingURL=apiService.js.map