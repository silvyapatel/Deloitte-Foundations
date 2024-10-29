import axios from "axios"
 
 export async function fetchAllProducts(){
    const products = await axios.get("http://localhost:9090/products")
        .then((res)=>res.data)
        .then((dat)=>dat)
        .catch(error => console.log(error));
                
        return products;
    };
                          
export async function addProduct(product){
    console.log(product);
    const productId = await axios.post("http://localhost:9090/products",product)
        .then((res)=>res.data)
        .then((dat)=>dat)
        .catch(error => console.log(error));                    
        
        return productId;
};


// export async function addProduct(product) {
//   console.log(product);
//   try {
//     const response = await axios.post("http://localhost:9090/products", JSON.stringify(product), {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     return { data: response.data };
//   } catch (error) {
//     console.error('Error adding product:', error);
//     return { data: null, error: error.message };
//   }
// }
