import React from "react";
import {Col, Row, Form, Button,FormGroup } from 'react-bootstrap';

function ForgotPwd() {

    return (
        <div className="Auth-form-container">
            <Form className="Auth-form">
                <div className="Auth-form-content">

                    <FormGroup  as={Row} className="mb-3" controlId="formHeader">
                        <Form.Label className = "Auth-form-title">Forgot Pwd</Form.Label>
                    </FormGroup>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <Form.Label column sm="5">Email</Form.Label>
                        <Col sm="5">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Col>
                    </Form.Group>
                
                    <Form.Group as={Row} className="mb-3" controlId="formBasicPwd">
                        <Form.Label column sm="5">Current Password</Form.Label>
                        <Col sm="5">
                            <Form.Control type="password" placeholder="Enter password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formConfirmPwd">
                        <Form.Label column sm="5">Confirm Password</Form.Label>
                        <Col sm="5">
                            <Form.Control type="password" placeholder="Re-Enter password" />
                        </Col>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default ForgotPwd;