import React from 'react'
// import './About.scss'

export default function Header() {
  return (
    <>
   <nav className="navbar navbar-expand-sm ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">About us</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">My Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Wishlist</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">order tracking</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link" href="#" id="A1">Trendy 25silver jawelry,save up 35% off today</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#" id="A1">Need help?call us+2354678922</a>
        </li>  
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">English</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">INR</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* Second nav start */}

<nav className="navbar navbar-expand-sm">
  <div className="container-fluid" id="C1">
     <a className="navbar-brand" href="javascript:void(0)"><img src="images/WhatsApp Image 2024-01-24 at 10.49.19 AM.jpeg" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search for products" />
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          {/* <a className="nav-link" href="javascript:void(0)"><button type="button" class="btn btn-light">Light</button></a> */}
          <button type="button" class="btn btn-light" id="A2">Became Vendor</button>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)"><i class="fa-solid fa-code-compare" id="A3"></i> Compare</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)"><i class="fa-regular fa-heart"></i> Wishlist</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* Third nav start */}

<nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Logo</a> */}
    <div class="dropdown">
  <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
    Browse All categories
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Link 1</a></li>
    <li><a class="dropdown-item" href="#">Link 2</a></li>
    <li><a class="dropdown-item" href="#">Link 3</a></li>
  </ul>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#"><i class="fa-solid fa-fire-flame-simple"></i> Hot deals</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Home</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">About</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Vendors</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Mega Menu</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Blog</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Pages</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">shop</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i class="fa-solid fa-headphones" id="a24"></i> 24</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
