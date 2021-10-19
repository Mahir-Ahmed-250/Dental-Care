import React from 'react';
import './Header.css'
import logo from '../Logo/logo.png'
import { Container, Navbar, Button, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { users, logOut } = useAuth()

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
            <Container>
                <NavLink className='company-name nav-links' to="/" style={{ color: 'rgb(84, 197, 235)' }}>
                    <img className='logo' src={logo} alt="" />Dental<span className='company-name-span'>Care</span></NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavLink className='nav-links' to="/home">Home</NavLink>
                    <NavLink className='nav-links' to="/doctors">Our Doctors</NavLink>
                    <NavLink className='nav-links' to="/about">About Us</NavLink>
                    {users.email ? <span style={{ color: 'white' }}><img className='nav-img' src={users.photoURL} alt="" /> {users.displayName}</span> : <NavLink className='nav-links' to="/registration"><Button variant="outline-success">Sign Up</Button></NavLink>}
                    {users.email ? <Button onClick={logOut} variant="outline-success" className='logout-btn'>Log Out</Button> : <NavLink className='nav-links' to="/login"><Button variant="outline-primary">Login</Button></NavLink>}
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;