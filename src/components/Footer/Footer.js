import React from 'react'
import './Footer.css'
import { Fab } from '@mui/material'
const Footer = () => {
  return (

    <footer class="section-p1">
      <div class="col">
        <img class="logo" src="img/logo.png" alt="" />
          <h4>Contact</h4>
          <p><strong>Address:</strong>  %562 Wellington Road, Street 32, Bangalore</p>
          <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
          <p><strong>Hours:</strong>  10:00 - 18:00, Mon - Sat</p>
          <div class="follow">
            <h4>Follow us</h4>
            <div class="icon">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest-p"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>
      </div>
      <div class="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Contact Us</a>
        <a href="#">Our Services</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Support</a>
      </div>
      {/* <div class="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">Delivery Information</a>
        <a href="#">View Cart</a>
        <a href="#">My WishList</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>

      </div> */}
      <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
          <img src="img/app.jpg" alt="" />
          <img src="img/play.jpg" alt="" />
        </div>
            <p>Secured Payment Gateways</p>
            <img src="img/pay.png" alt="" />

      </div>
      <div class="copyright">
        <p>@2023 ExOPs Team</p>
      </div>
          </footer>
  )
}

export default Footer