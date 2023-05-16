import React from 'react'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './HomePage.css'


const HomePage = () => {
  return (
    <div>
          <Navbar />
          <div className='image-text-overlay'>
              <img className="back-img" src='bg.jpg' />
              <h1>Simplify your insurance<br></br> processes with our<br></br> easy-to-use APIs</h1>
          </div>
          

          <Body/>
          <Footer />
    </div>
  )
}

export default HomePage