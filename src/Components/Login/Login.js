import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import image from './image/login.png'
import image1 from './image/welcome.png'
import './Login .css'
const Login = () => {
    const { users, signInUsingGoogle, handleEmail, handlePassword, handleSignIn, error } = useAuth()
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
                    <h2 className='text-center mt-2 sign-in'>Sign In</h2>
                    <div className='col-md-6 col-lg-8 animate__animated animate__fadeInLeft'>
                        <Form className='form-reg ' onSubmit={handleSignIn}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                            </Form.Group>
                            <h6 className='text-danger'>{error}</h6>
                            <Button variant="primary" type="submit">
                                Login
                            </Button><br />
                            <Button className="mt-2" variant="secondary" onClick={signInUsingGoogle}>
                                Access by Google
                            </Button>
                            <br />
                        </Form>
                        <Link to='/registration'>     <button className='btn btn-dark mt-2'>New to DentalCare? Register Here</button></Link>
                    </div>

                    <div className="col-md-6 col-lg-4 animate__animated animate__fadeInRight">
                        <img src={image} alt="" />
                    </div>
                </div>}
        </div>
    );
};

export default Login;