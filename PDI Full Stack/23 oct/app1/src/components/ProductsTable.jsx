import React from 'react'
import '../components/Styles.css'

// function onProductClick({product}){
//     alert(product.id+' '+product.pname);
// }
export default function ProductsTable({products,onProductClick}) {
    const productList =products.map(product=>{
        return(
            
            <tr key={product.id}>
            <td scope="row">{product.id}</td>
            <td>{product.pname}</td>
            <td>{product.pdesc}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><button className="button" variant="primary" onClick={()=>onProductClick(product)}>View</button></td>
            </tr> 
            
        )
    })
    /*can also use ternary operator instead of if else
            return condition?(if true):(if false) */
    return products&&products.length>0?(
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>No.</th>
                    <th>Product name</th>
                    <th>Product description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {productList}
                </tbody>
            </table>
        </div>
    ):(<div>No Products Found</div>)
// if(products){
//     return (
    
//         <table className="table table-striped" >
//             <tr>
//                 <th scope="col">No.</th>
//                 <th scope="col">Product name</th>
//                 <th scope="col">Product description</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col">Actions</th>
//             </tr>
//             {/*This is one way but not efficient*/}
//             {/* <tr>
//                 <td>{products[0].id}</td>
//                 <td>{products[0].pname}</td>
//                 <td>{products[0].pdesc}</td>
//                 <td>{products[0].price}</td>
//                 <td>{products[0].quantity}</td>
//             </tr> */}
//             {/*using Map shown above*/}
//             {productList}
//         </table>
    
//   )
// }
// else{
//     return(
//         <div>No Products Found</div>
//     )
// }

}


