import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Form from '../../components/AddForm/AddForm'
import DeleteForm from '../../components/DeleteForm/DeleteForm'


const Workspace = () => {
  return (
    <div>
        <Navbar/>
        <h1>Workspace</h1>
        <Form/>
        <DeleteForm/>
        <Sidebar/>
        <Footer/>
    </div>
  )
}

export default Workspace