//CODE FOR PRODUCT LIST
async function Home() {
  const response = await fetch("http://localhost:9090/products");
  const products = await response.json();
  console.log(products);

  return products && products.length > 0 ? (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>        
        </tr>      
      </thead>      
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <th scope="row">{product.id}</th>            
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td><button className="primary" >View</button></td>
          </tr>
        ))}
      </tbody>    
      </table>) : 
      (
        <>
        <h3> No data found</h3>
        </>
      );
    }

export default Home;






//CODE FOR CARD DISPLAY

// import Card from "./components/Card";

// function Home() {
//   const products = [
//     {id:1, name:'Apple', description:'Kashmiri Apple', price:120, quantity:100, imageUrl: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"},
//     {id:2, name:'Banana', description:'Kashmiri Banana', price:120, quantity:100, imageUrl: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"},
//     {id:3, name:'Grapes', description:'Kashmiri Grapes', price:120, quantity:100, imageUrl: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"},
//     {id:4, name:'Mango', description:'Kashmiri Mango', price:120, quantity:0, imageUrl: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"},
//     {id:5, name:'Jackfruit', description:'Kerala Jackfruit', price:120, quantity:0, imageUrl: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"},
//   ];

//   return (
//     <div>
//       <h1>Displaying Multiple Cards</h1>
//       <div>
//         {products.map((product, idx) => (
//           <Card
//             key={idx}
//             title={product.name}
//             description={product.description}
//             imageUrl={product.imageUrl}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;




//CODE FOR LINK,ROUTER,IMG
              
// "use client";
// import Link from "next/link";
// import {useRouter} from "next/navigation";
// export default function Home() {
//   const router=useRouter()
  
//   return (
//     <>
//     <Link href="about" className="btn btn-primary">About Page</Link><br></br>
//     <button onClick={()=>router.push('/about')}>About Page</button><br></br>
//     <img src="flower.jpg"
//     alt="flower image"
//     height={400}
//     width={400}
//     quality={100}
//     placeholder="blur"
//     priority="true"/>
//     </>
//   );
// }