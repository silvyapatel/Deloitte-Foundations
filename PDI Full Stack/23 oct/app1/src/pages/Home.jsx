import {React,useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import ProductsTable from '../components/ProductsTable'
import ProductModal from '../components/ProductModal'
import { Button } from 'react-bootstrap'
import AddProduct from './AddProduct'
import { useNavigate } from 'react-router-dom'
import {fetchAllProducts,addProduct} from '../services/ProductServices'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleSelectedProduct = (product) => { 
    setSelectedProduct(product); 
    setShow(true)
  }
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch products from the product service
    fetchAllProducts()
      .then((response) => response.json())  
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
                                                
  // const products=[
  //   {id:1,pname:"apple",pdesc:"sweet",price:120,quantity:100},
  //   {id:2,pname:"Orange",pdesc:"sweet",price:120,quantity:100},
  //   {id:3,pname:"Banana",pdesc:"sweet",price:120,quantity:100},
  //   {id:4,pname:"kiwi",pdesc:"sweet",price:120,quantity:100},
  //   {id:5,pname:"strawberry",pdesc:"sweet",price:120,quantity:100}
  // ]
  const navigate=useNavigate();
  return (
    <div>
       {/* <Navbar/> */}
        {/* <Form/> */}
       <ProductsTable products={products} onProductClick={handleSelectedProduct}/>
       <ProductModal selectedProduct={selectedProduct} show={show} handleClose={handleClose}/>
       <Button variant="success" onClick={()=> navigate('/addProduct')}>Add Product</Button>
       {/* <Footer/> */}
    </div>
  )
}

// export default Home 
//use when not exporting the function