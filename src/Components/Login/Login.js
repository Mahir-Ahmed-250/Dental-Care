import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import image from './image/login.png'
const Login = () => {
    const { signInUsingGoogle } = useFirebase()
    return (
        <div className="container">

            <div className='row'>
                <h2 className='text-center'>Sign In</h2>
                <div className='col-md-6 col-lg-8'>
                    <Form className='form-reg' onSubmit=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur='' type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur='' type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button><br />
                        <Button className="mt-3" variant="primary" onClick={signInUsingGoogle}>
                            Sign In Using Google?
                        </Button>
                    </Form></div>
                <div className="col-md-6 col-lg-4">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;