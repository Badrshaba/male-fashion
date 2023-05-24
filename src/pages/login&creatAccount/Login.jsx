import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" d-flex  justify-content-center align-items-center pt-5 pb-5 bg-dark   bg-opacity-25" >
      <Form>
        <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          
          <Form.Control type="password" placeholder="Password"  />
          {/* <BsEyeFill/> */}
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remmber me" />
        </Form.Group>
        <Button variant="primary" className=" me-3" type="submit">
          Log in
        </Button>
        <Button variant="primary" as={Link} to="/logIn/creataccount" type="submit">
          Creat New Account
        </Button>
      </Form>
    </div>
  );
};

export default Login;
