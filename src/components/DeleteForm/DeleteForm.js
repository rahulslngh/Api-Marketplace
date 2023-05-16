import React, { useState } from 'react'

function DeleteForm(props) {
    const [formData,setFormData] = useState({apiId:""});
    const [itemId, setItemId] = useState("");

  const handleInputChange = (event) => {
    setItemId(event.target.value);
  };

    
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://20.193.131.62:8025/api-details/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful deletion
        console.log("Item deleted:", data);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
      props.onClose();
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">ID</label>
            <input type="text" value={itemId} id="apiId" name="apiId" onChange={handleInputChange} />

            <button className='button' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default DeleteForm