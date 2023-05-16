import React from 'react'
import './Filter.css'
import { Checkbox } from '@mui/material'


const Filter = () => {
  return (
    <div className='filter-card'>
        <div>
            <p>Filters</p>
        </div>
        <div className='filter-card-element'>
            <Checkbox /><p>Business</p>
        </div>
        <div className='filter-card-element'>
            <Checkbox /><p>Technology</p>
        </div>
        <div className='filter-card-element'>
            <Checkbox /><p>AI</p>
        </div>
        <div className='filter-card-element'>
            <Checkbox /><p>Analytics</p>
        </div>
        <div className='filter-card-element'>
            <Checkbox /><p>Banking</p>
        </div>
        <div className='filter-card-element'>
            <Checkbox /><p>Big Data</p>
        </div>
        
        <div className='filter-card-element'>
            <Checkbox /><p>Banking & Financial Services</p>
        </div>


    </div>
  )
}



export default Filter