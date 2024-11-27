import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

function AddCar() {
  const styles = {
    container: {
      backgroundColor: "rgba(255, 255, 255, 0.8) !important",
      backgroundImg:
        "url('https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  };

  // form data state
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    description: "",
    mileage: "",
    condition: "used",
    pictures: [],
    postedBy: "",
  });
  const [processing, setProcessing] = useState(false);

  // handle form data change
  const handleFormDataChange = (e) => {
    if (e.target.id === "pictures") {
      const splitted = e.target.value.split(",");
      setFormData({ ...formData, [e.target.id]: splitted });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  // handle clear input fields
  const handleClearInput = () => {
    setFormData({
      make: "",
      model: "",
      year: "",
      price: "",
      description: "",
      mileage: "",
      condition: "used",
      pictures: [],
      postedBy: "",
    });
  };

  // handle form submit
  const authToken = localStorage.getItem("authToken");

  const handleSubmit = async (e) => {
    setProcessing(true);
    e.preventDefault();

    // send data to backend
    try {
      const response = await fetch("http://localhost:5000/api/cars/addcar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setProcessing(false);

        alert("Car added successfully");

        handleClearInput();
      } else {
        setProcessing(false);

        alert("Login failed");
        console.log(response);
      }
    } catch (error) {
      console.error(error);
      setProcessing(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row" style={styles.container}>
        <div className="col-md-6"></div>

        <div className="col-md-6">
          <h1 className="mb-5 text-danger">Add New Car</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="make">
              <Form.Label>Car Make</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter car make"
                value={formData.make}
                onChange={(e) => handleFormDataChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="model">
              <Form.Label>Car model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter car model"
                value={formData.model}
                onChange={(e) => handleFormDataChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter year"
                value={formData.year}
                onChange={(e) => handleFormDataChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={formData.price}
                onChange={(e) => handleFormDataChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) => handleFormDataChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mileage">
              <Form.Label>Mileage</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter mileage"
                value={formData.mileage}
                onChange={(e) => handleFormDataChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="condition">
              <Form.Label>Condition</Form.Label>
              <Form.Control
                as="select"
                value={formData.condition}
                onChange={(e) => handleFormDataChange(e)}
              >
                <option value="new">New</option>
                <option value="used">Used</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="pictures">
              <Form.Label>Pictures</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pictures"
                value={formData.pictures}
                onChange={(e) => handleFormDataChange(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="postedBy">
              <Form.Label>Posted By</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter posted by"
                value={formData.postedBy}
                onChange={(e) => handleFormDataChange(e)}
              />
            </Form.Group>

            {processing ? (
              <Spinner animation="border" variant="danger" />
            ) : (
              <Button variant="primary" type="submit">
                Add Car
              </Button>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
