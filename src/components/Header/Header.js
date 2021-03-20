import React, { useContext } from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../Home/Home';

const Header = () => {
  const [loggedInUser] = useContext(UserContext);


    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">City Transfer</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link><Link to="/home">Home</Link></Nav.Link>
          <Nav.Link><Link to="/destination">Destination</Link></Nav.Link>
          <Nav.Link>
            {
             loggedInUser.email ? <span>{loggedInUser.displayName}</span> : <Link to="/login">Login</Link>
            }
          </Nav.Link>
        </Nav>
      </Navbar>
    );
};

export default Header;