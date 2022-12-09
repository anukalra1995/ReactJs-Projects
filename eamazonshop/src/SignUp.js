import React from "react";
import {Col, Row, Form, Button,Modal } from 'react-bootstrap';
import './Login.css';
// import { signup } from "../Service/ClientService";

export default function SignUp(props) {

    return (
        <Modal show = {props.showdata} onHide = {props.Close}>
            <Modal.Header closeButton>
                <Modal.Title> Register User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div>
                        <Form.Group as={Row} className="mb-3" controlId="formFirstName">
                            <Form.Label column sm="5">Enter First Name</Form.Label>
                            <Col sm="5">
                                <input type="text" id="fname" placeholder="Enter First Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formLastName">
                            <Form.Label column sm="5">Enter Last Name</Form.Label>
                            <Col sm="5">
                                <input type="text" id="lname" placeholder="Enter Last Name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                            <Form.Label column sm="5">Enter Email</Form.Label>
                            <Col sm="5">
                                <input type="email" id="email" placeholder="Enter email" />
                            </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPwd">
                            <Form.Label column sm="5">Enter Password</Form.Label>
                            <Col sm="5">
                                <input type="password" id="pwd" placeholder="Enter password" />
                            </Col>
                        </Form.Group>
                        <Button type="submit" >Save</Button>
                    </div>
                </Form>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button type="submit" onClick = {submitForm}>Save</Button>
            </Modal.Footer> */}
            
        </Modal>
    );
}