import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Page404 from './pages/Page404';
import AddProduct from './pages/AddProduct';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const routes = createBrowserRouter([
{
  element: <Layout />,
  errorElement: <Page404 />,
  children: [
            {path:'/', element:<Home/>},
            {path: '/addProduct', element:<AddProduct/> }
            ]
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
