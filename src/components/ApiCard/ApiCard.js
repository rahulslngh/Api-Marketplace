import React from 'react'
import './ApiCard.css'

const Card = ({ data }) => {
  return (
    <div class="card">

      <div className='card-header'>
        <img src={data.apiImg} alt="img" class="card-image" />
        <p class="card-title">{data.apiName}</p>
      </div>
      
      <div >
       
        <p class="card-description">{data.apiDesc}</p>
        
        
      </div>
      <div className='card-type'>
        <p class="card-type">Type: {data.apiType}</p>
      </div>
      <div className='button-container'>
          <button className='button'>Subscribe</button>
      </div>
      
    </div>
  );
};

export default Card
