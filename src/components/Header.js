import React from "react";
import Img from '../image/img2.jpg';
import Img2 from '../image/img3.jpg';


function Header() {
  return (
    <>
   <h1>Header</h1>
   <div className='image'>
   <img src= {Img} />
   <img src= {Img2} />
   </div>
   </>
  )
}


export default Header;