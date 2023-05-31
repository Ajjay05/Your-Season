import React from 'react'
import "../Header/Header.css"
import logo from "../Assets/Your-season-Final-Logo-v1/Your-season-Final-Logo-v1.png"

const Header = () => {
  return (


    <nav class="navbar navbar-expand-lg navbar-light bg-dark header ">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        
        <img src={logo} className="logo"></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <div className='d-flex justify-content-center align-item-center flex-row'> */}
        <div class="collapse navbar-collapse flex-1" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          
          </div>
        </div>
        {/* <div>
    
        </div> */}

      </div>
    </nav>

  )
}

export default Header
