import React, {useState, useEffect} from "react";
import {Form, Button, Container, Row, Col,} from "react-bootstrap";
import {
    logInWithEmailAndPassword, logOut
} from "../../firebaseConfig";

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <h1>Sign In</h1>
            <Container fluid="sm">
                <Row  className='justify-content-md-center'>
                    <Col xs={12} md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail((e.target.value))}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId ="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword((e.target.value))}
                                />
                            </Form.Group>
                            <Button variant="primary"
                                    type="submit"
                                    onClick={() => logInWithEmailAndPassword(email,password)}
                            >
                                Submit
                            </Button>

                            <Button variant="primary"
                                    type="submit"
                                    onClick={() => logOut()}
                            >
                                sign out
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginScreen