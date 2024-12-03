import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

function Login() {
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
    email: "",
    password: "",
  });
  const [processing, setProcessing] = useState(false);

  // toggle show
  const toggleShow = () => {
    setShow(!show);
  };

  // handle form data change
   const apiUrl = import.meta.env.VITE_API_URL;
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle clear input fields
  const handleClearInput = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    setProcessing(true);
    e.preventDefault();

    // send data to backend
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        setProcessing(false);

        // store auth token and login user to local storage
        localStorage.setItem("authToken", data.authToken);
        localStorage.setItem("loginUser", JSON.stringify(data.user));

        alert("Login successful");
        handleClearInput();

        // navigate to login view
        navigate("/cars");
      } else {
        setProcessing(false);
        alert("Login failed");
      }
    } catch (error) {
      console.error(error);
      setProcessing(false);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-5 text-danger">Welcome! Login</h1>
      <Form onSubmit={handleSubmit}>
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
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        {processing ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <Button variant="primary" type="submit">
            Login
          </Button>
        )}
      </Form>
    </div>
  );
}

export default Login;
