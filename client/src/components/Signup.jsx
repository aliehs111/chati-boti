import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Signup() {
  //state variables//
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //state variables to handle success and errors//
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //event handler for form input change//
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //event handler for form submission//
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //send POST request to backend API to create new user//
      const response = await axios.post("/api/user", formData);
      //handle success response
      if (response.status === 201) {
        setSuccessMessage("User registration successful");
        setErrorMessage("");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred while registering user");
      }
    }
  };

  return (
    <div>
      {successMessage && <p className="text-success">{successMessage}</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <Form>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
