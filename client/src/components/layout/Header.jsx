import React from 'react'
import {Link} from 'react-router-dom'
import  Navbar from 'react-bootstrap/Navbar';
import  Container from 'react-bootstrap/Container';
import  Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
<>
  <Navbar style={{ backgroundColor: "#5C6BC0"}} variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand>
        <Link className="navbar-brand" to='/home'>HAPPY DAYS</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
      <div className="w-100 d-flex flex-row justify-content-between">
        <Nav>
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"> 
                      <Link className="nav-link"to='/home'>Home</Link>
                  </li>
                  <li className="nav-item"> 
                      <Link className="nav-link"to='/albums'>All Albums</Link>
                  </li>
                  <li className="nav-item"> 
                      <Link className="nav-link"to='/album'>Album Title</Link>
                  </li>
                  <li className="nav-item"> 
                      <Link className="nav-link"to='/comment'>Comment</Link>
                  </li>
                </ul>
        </Nav>
        <Nav>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"> 
                      <Link className="nav-link"to='/signin'>Sign In</Link>
                  </li>
                  <li className="nav-item"> 
                      <Link className="nav-link"to='/signup'>Register</Link>
                  </li>
                  <li className="nav-item"> 
                      <Link className="nav-link" to='/signout'>Sign Out</Link>
                  </li>
              </ul>
        </Nav>
      </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</>
  )
}

export default Header