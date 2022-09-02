import React from 'react';
import './Header.css';
import  serach from  "../../Images/search.png"
import cart from "../../Images/shopping-cart1.png"

function Header() {
  return (
    <>
    <div id="headerdiv">
    
    <div id="headerlogo">
     <h3>Mini Store</h3>
    </div>

    <div id="searchdiv">

       <div id="search">
       <input type="text" name='search' placeholder='Search' />
       <img src={serach} alt="" />
       </div>
     
      <div id="cartdiv">
      <img src={cart} alt="" />
      </div>

    </div>
    
   
    </div>

    <div id="headermenu">

    </div>
    
    
    </>
  )
}

export default Header