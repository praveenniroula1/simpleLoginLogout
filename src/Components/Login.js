import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const initialValue = {
  userName: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState();
  const [form, setForm] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully Logged In");
    console.log(form);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };
  return (
    <>
      {" "}
      <Form className="form ms-auto" onSubmit={handleSubmit}>
        <h1 className="text">Login Form</h1>
        <Row className="inside mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="UserName"
              onChange={handleOnChange}
              name="userName"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="*******"
              onChange={handleOnChange}
              name="password"
              value={form.password}
            />
          </Form.Group>
        </Row>

        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
};

export default Login;
