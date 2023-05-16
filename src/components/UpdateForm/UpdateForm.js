import React, { useState } from 'react'
import './UpdateForm.css'


function UpdateForm(props) {
     
    const [itemId, setItemId] = useState("");

    const [formData, setFormData] = useState({
    apiId:"",
    apiname: "",
    apiType: "",
    apiDesc: "",
    businessType: "",
    apiImg:"",
    apiDoc:"",
  });

    
  
   
  const handleInputChangeID = (event) => {
    setItemId(event.target.value);
  };
  
   function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://20.193.131.62:8025/api-details/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful update
        console.log("Item updated:", data);
        props.onClose();
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
      
  };


  return (
    <div>
        <form onSubmit={handleSubmit}>

      <label htmlFor="id">ID</label>
      <input type="text" value = {itemId} id="apiId" name="apiId" onChange={handleInputChangeID} />

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

export default UpdateForm