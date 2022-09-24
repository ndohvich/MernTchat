/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import botImg from "../assets/bot.jpg";

function Signup() {
  return (
    <Container>
      <Row>
          <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
            <Form>
              <h1 className="text-center">Create Account</h1>
              <div className="signup-profile-pic__container">
                <img src="{ botImg }" class="signup-profile-pic"/>
                <label htmlFor="image-upload" className="image-upload-label"></label>
                  <i className="fa fa-plus-circle add-picture-icon"></i>
              </div>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="success" type="submit">
                Signup
              </Button>
              <div className="py-4">
                <p className="text-center">
                  I have an account ? <Link to="/login">Login</Link>
                </p>
              </div>
            </Form>
          </Col>
          <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  );
}

export default Signup