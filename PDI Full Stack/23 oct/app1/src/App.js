import logo from './logo.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import Layout from './components/Layout';
import Page404 from './pages/Page404';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="addProduct" element={<AddProduct />} />
    //     <Route path="*" element={<Page404 />} />
    //   </Route>
    // </Routes>
    <Home/>
  );
}

export default App;
