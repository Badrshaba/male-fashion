import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Creataccount = () => {
  return (
    <div className=" d-flex  justify-content-center align-items-center pt-5 pb-5 bg-dark bg-opacity-25">
      <Form>
        <div className=" d-flex justify-content-between">
          <Form.Group className="mb-3 fw-bold me-2" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter user name" />
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control type="password" placeholder="Password" />
          {/* <BsEyeFill/> */}
        </Form.Group>
        <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
          <Form.Label>Image </Form.Label>
          <Form.Control type="text" placeholder="Image" />
        </Form.Group>
        <div className=" d-flex">
          <div>
            {" "}
            <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
          </div>
          <div>
            <Form.Label className=" fw-bold">Gender</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">male</option>
              <option value="2">female</option>
            </Form.Select>
          </div>

          <div>
            {" "}
            <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
          </div>
        </div>
        <Form.Group
          className="mb-3 fw-bold text-primary"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Apply Rules and Conditions" />
        </Form.Group>
        <Button variant="primary" className=" me-3" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default Creataccount;
