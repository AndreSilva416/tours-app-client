import React from  'react'
import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'
import './MyNav.css'

function MyNav(props) {
  return (
    <Navbar  bg="dark"  expand="lg">
      <Navbar.Toggle  aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav  className="mr-auto">
          <div className="nav">
          {
            props.user ? (
            <>
              <Link  style={{marginLeft: '10px'}}  to="/">Home</Link>
              <div className="navbtn">
              <Link  style={{marginLeft: '10px'}}  to="/addform">Create Tour</Link>
              <Link  style={{marginLeft: '10px'}}  to="/profile">Profile</Link>
              <button style={{marginLeft: '10px'}} onClick={props.onLogout}>Logout</button>
              </div>
             </> 
            ) : (
              <>
                <Link  style={{marginLeft: '10px'}}  to="/">Home</Link>
                <div className="signbtn">
                <Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
                <Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
                </div>
                
              </>
            )
          }
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    )
}
export default MyNav