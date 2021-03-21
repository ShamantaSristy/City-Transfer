import React, { useContext } from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../Home/Home';
import './Header.css';
// import LocalTaxiSharpIcon from '@material-ui/icons/LocalTaxiSharp';
import CommuteIcon from '@material-ui/icons/Commute';

const Header = () => {
  const [loggedInUser] = useContext(UserContext);


    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><h1><CommuteIcon style={{ fontSize: 40 }}/>  City Transfer</h1></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link><Link className="link" to="/home"><h5>Home</h5></Link></Nav.Link>
          <Nav.Link><Link className="link" to="/destination"><h5>Destination</h5></Link></Nav.Link>
          <Nav.Link>
          
             <Link className="link" to="/login">{loggedInUser.email ? <span>{loggedInUser.displayName}</span> : <span><h5>Login</h5></span>}</Link>
            
          </Nav.Link>
        </Nav>
      </Navbar>
    );
};

export default Header;