import React, { useState } from 'react'
import './AddForm.css'


function Form(props) {
    const [formData, setFormData] = useState({
    apiname: "",
    apiType: "",
    apiDesc: "",
    businessType: "",
    apiImg:"",
    apiDoc:"",
  });

    
  


   function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://20.193.131.62:8025/api-details/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    props.onClose();
    const data = await response.json();
    console.log(data); // Do something with the response data
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="apiName" name="apiName" onChange={handleInputChange} />

      <label htmlFor="email">Type</label>
      <input type="text" id="apiType" name="apiType" onChange={handleInputChange} />

      <label htmlFor="password">Description</label>
      <input type="text" id="apiDesc" name="apiDesc" onChange={handleInputChange} />

      <label htmlFor="name">Business Type</label>
      <input type="text" id="businessType" name="businessType" onChange={handleInputChange} />

      <label htmlFor="name">Image</label>
      <input type="text" id="apiImg" name="apiImg" onChange={handleInputChange} />
     
      <label htmlFor="name">Documentation</label>
      <input type="text" id="apiDoc" name="apiDoc" onChange={handleInputChange} />

      <button className='button' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form