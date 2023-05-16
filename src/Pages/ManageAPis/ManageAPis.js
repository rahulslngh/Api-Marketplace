import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ApisPage from '../ApisPage';
import Table from '../../components/Table/Table'
import axios from 'axios';
import './ManageAPis.css'
import Modal from '../../components/Modal/Modal';
import Form from '../../components/AddForm/AddForm';
import DeleteForm from '../../components/DeleteForm/DeleteForm';
import UpdateForm from '../../components/UpdateForm/UpdateForm';


const ManageAPis = () => {

  const [data, setData] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isUpOpen, setIsUpOpen] = useState(false);

  const handleAddOpen = () => {
    setIsAddOpen(true);
  };

  const handleAddClose = () => {
    setIsAddOpen(false);
  };

  const handleDelOpen = () => {
    setIsDelOpen(true);
  };

  const handleDelClose = () => {
    setIsDelOpen(false);
  };

  const handleUpOpen = () => {
    setIsUpOpen(true);
  };

  const handleUpClose = () => {
    setIsUpOpen(false);
  };

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
      
       <Navbar/>
       <h4 className='manage-heading'>Manage your APIs</h4>
       
       <Table data = {data} />
       <div className='btn-div'>
          <div >
             <button className='add-button' onClick={handleAddOpen}>Add new API</button>
             {isAddOpen && (
        <Modal onClose={handleAddClose}>
        <Form onClose={handleAddClose} />
        </Modal>
      )}
          </div>
         
          <div >
            <button className='del-button' onClick={handleDelOpen}>Delete </button>
            {
              isDelOpen && (
                <Modal onClose={handleDelClose}>
                  <DeleteForm onClose={handleDelClose} />
                </Modal>
              )}
          </div>
          
          <div >
            <button className='upd-button' onClick={handleUpOpen}>Update API</button>
            {
              isUpOpen && (
                <Modal onClose={handleUpClose}>
                  <UpdateForm onClick={handleUpClose}/>
                </Modal>
              )
            }
          </div>
       </div>
       
       <Footer/>

      
    </div>
  )
}

export default ManageAPis