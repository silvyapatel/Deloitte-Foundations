import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
 
function Layout() {
    return (
        <>
            <Navbar/>
            <Container fluid>
                <main>
                    <Outlet/>
                </main>
            </Container>        
            <Footer/>
        </>
    );
}

export default Layout;