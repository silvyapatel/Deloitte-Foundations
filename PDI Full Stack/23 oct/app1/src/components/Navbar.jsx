import React from 'react';


const Navbar = () => {
  return (      
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          <a className="nav-link" href="/addProduct">Add Products</a>
          <a className="nav-link" href="#">Pricing</a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar