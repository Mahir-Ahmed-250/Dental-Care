import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import image from './image/login.png'
import './Registration.css'
import image1 from './image/welcome.png'
const Registration = () => {
    const { users, signInUsingGoogle, handleRegistration,
        handlePassword,
        handleEmail,
        handleNameChange, error } = useAuth();
    return (
        <div className="container">
            {users.email ?
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <img className='animate__animated animate__fadeInLeft' src={image1} alt="" />
                        </div>
                        <div className='col-lg-6 mt-5 '>
                            <h2 className='animate__animated animate__fadeInRight login-text'>Welcome <br /><span className='user-name'>{users.displayName}</span></h2>
                        </div>
                    </div>
                </div>
                :
                <div className='row'>
                    <h2 className='text-center mt-2 sign-up'>Sign Up</h2>
                    <div className='col-md-6 col-lg-8 animate__animated animate__fadeInLeft'>
                        <Form className='form-reg ' onSubmit={handleRegistration} >
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Your Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                            </Form.Group>
                            <p className='text-danger'>{error}</p>
                            <Button variant="primary" type="submit">
                                Register
                            </Button><br />
                            <Button className="mt-2" variant="secondary" onClick={signInUsingGoogle}>
                                Access by Google
                            </Button>
                        </Form>
                        <Link to='/login'><button className='btn btn-dark mt-2' >Already Have an account? Sign In Here</button></Link>
                    </div>
                    <div className="col-md-6 col-lg-4 animate__animated animate__fadeInRight">
                        <img src={image} alt="" />
                    </div>
                </div>}
        </div>
    );
};

export default Registration;