import React from "react";
import {Modal,Col, Row, Form, Button } from 'react-bootstrap';
// import LoginSignUp from "./LoginSignUp";
import { Link } from "react-router-dom";

export default function Login(props){

    return (
        <div>
            <Modal show = {props.showdata} onHide = {props.Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form >
                        <div>
                            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                                <Form.Label column sm="5">Enter Email</Form.Label>
                                <Col sm="5">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formBasicPwd">
                                <Form.Label column sm="5">Enter Password</Form.Label>
                                <Col sm="5">
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Col>
                            </Form.Group>
                        </div>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    
                    <Link to="/Forgot" style={{ textDecoration:"none",marginRight: "10%" }}>
                        Forgot Password ?
                    </Link>
                    <Button type="submit" onClick = {props.Close} style={{marginRight: "40%"}}>Submit</Button>
                    
                    <Link to="/SignUp" style={{ textDecoration:"none" }}>
                        Create Account
                    </Link>
                    
                </Modal.Footer>
            </Modal>
            
        </div>
    );
}