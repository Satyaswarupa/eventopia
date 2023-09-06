import React from 'react'
import {BsWhatsapp,BsInstagram, BsFacebook} from "react-icons/bs"


const Footer = () => {
  return (
 <footer>
  <div className="foot">
    <div className="flft">
    <h3>ABOUT US</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum pariatur placeat similique id dolor nesciunt quod, commodi asperiores earum quas at sit corrupti a eos molestiae. Facilis quam quisquam aperiam!</p>
    </div>
   <div className="frht">
   <h3>CATAGORY</h3>
    <ul>marrage</ul>
    <ul>birth days</ul>
    <ul>marrage</ul>
    <ul>birth days</ul>
   </div>
   <div className="lrht">
   <h3 className='icons'>CONTACT</h3>
    <BsWhatsapp />
    <BsInstagram />
    <BsFacebook />
   </div>
  </div>
  <div className="copyright">
        &copy; {new Date().getFullYear()} Eventopia. All rights reserved.
      </div>
 </footer>
  )
}

export default Footer