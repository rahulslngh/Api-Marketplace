import React, { useEffect } from 'react'
import './Navbar.css'
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
   

  const isAdmin = user && Array.isArray(user["http://localhost:3000/roles"]) && user["http://localhost:3000/roles"].includes("admin");

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user["http://localhost:3000/roles"]);
      console.log(isAdmin)
    }
  }, [isAuthenticated, user]);

  return (
    <>
      <nav className='nav-bar'>
        <ul id="navbar">
          <li><Link to = "/" className='list-item'>Home</Link></li>

          
          <li>{isAdmin && <Link to="/manage-apis" className='list-item' >ManageAPis</Link>}</li>
          
          
          <li>
              <Link to ="/contact">Contact</Link></li>
          <li><Link to="/apis" className='list-item'>Apis</Link></li>
          <li><a href="cart.html"><i className="far fa-shopping-bag"></i></a></li>
          <li><div>
                  {isAuthenticated ? (
                    <button className="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                  ) : (
                    <button className="button" onClick={() => loginWithRedirect()}>Log In</button>
                  )}</div>
          </li>
          <li>
            {isAuthenticated &&(<div><img className='user-picture' src={user.picture} alt="pic" /></div>) }
          </li>
          <li>{isAuthenticated && (isAdmin ? <div>Admin</div> : <div>Developer</div>)}</li>
          
          
          
          
            
          
          
          
           
        </ul>
        
      </nav>
    </>
  )
}

export default Navbar
