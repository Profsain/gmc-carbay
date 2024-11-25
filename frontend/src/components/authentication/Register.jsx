import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Register() {
  // styles
  const styles = {
    show: {
      position: "relative",
      left: "90%",
      bottom: "30px",
      color: "blue",
      cursor: "pointer",
    },
  };

  const navigate = useNavigate();
  // form data state
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  // toggle show
  const toggleShow = () => {
    setShow(!show);
  };

  // handle form data change
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle clear input fields
  const handleClearInput = () => {
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send data to backend
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        console.log(data);
        alert("Registration successful");
        handleClearInput();

        // navigate to login view
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-5 text-danger">New User Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Fullname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter fullname"
            value={formData.name}
            onChange={(e) => handleFormDataChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={(e) => handleFormDataChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => handleFormDataChange(e)}
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleFormDataChange(e)}
          />
          <div style={styles.show}>
            {show ? (
              <p onClick={toggleShow}>Hide</p>
            ) : (
              <p onClick={toggleShow}>Show</p>
            )}
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
