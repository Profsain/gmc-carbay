import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "./CarCard";
import Spinner from "react-bootstrap/Spinner";

const Listing = () => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
    },
  };

  // navigate to other pages
  const navigate = useNavigate();

  // state
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // handle fetch cars from api
  const fetchCars = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cars");
      const data = await response.json();

      setCars(data);
      setLoading(false);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  // handle open single car details
  const openCarDetails = (id) => {

    navigate(`/car-details/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1>Welcome to Listing page</h1>

      {loading && <Spinner animation="border" variant="danger" />}

      <div style={styles.grid}>
        {cars.map((car) => (
          <CarCard
            key={car._id}
            carImg={car.pictures[0]}
            model={car.model}
            postedBy={car.postedBy}
            openFunc={() => openCarDetails(car._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Listing;
