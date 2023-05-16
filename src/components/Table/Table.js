import React from 'react'
import './Table.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Table({ data }) {
    
  return (
    <div>
        <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Business Type</th>
          <th>Image</th>
          <th>Documentation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.apiId}</td>
            <td>{row.apiName}</td>
            <td>{row.apiType}</td>
            <td>{row.apiDesc}</td>
            <td>{row.businessType}</td>
            <td>{row.apiImg}</td>
            <td>{row.apiDoc}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Table