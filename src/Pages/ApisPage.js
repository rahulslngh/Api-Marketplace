
import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import SwaggerComp from '../components/SwaggerComp/SwaggerComp'
import './ApisPage.css'
import Body from '../components/Body/Body'
import Filter from '../components/Filter/Filter'
import { useState, useEffect } from 'react';
import Card from '../components/ApiCard/ApiCard';




const ApisPage = () => {

    const [data, setData] = useState([]);

     useEffect(() => {
      axios.get('http://20.193.131.62:8025/api-details/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
   
  
  return (
    <div>
        <Navbar />
        
        
       <div className='page-content'>
          <div className='sidebar-content'>
              <Filter/>

          </div>


          <div className='main-content'>
          <div className='heading'>API Catalouge</div>
        
       <div className='card-row'>
  {data.map((item, index) => (
    <Link key={index} to={item.apiDoc}>
      <Card className="api-card" data={item} />
    </Link>
  ))}
</div>

       </div>

       </div>
       
       
        
        <Footer />
    </div> 
    
  )
}

export default ApisPage