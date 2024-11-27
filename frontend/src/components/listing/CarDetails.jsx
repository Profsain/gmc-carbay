import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();

  const [carObj, setCarObj] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCar = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/cars/${id}`);
      const data = await response.json();

      setCarObj(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

    console.log(carObj);

  return (
    <div className="container my-5">
      {loading && <Spinner animation="border" variant="danger" />}
      <h1>{carObj.model}</h1>

      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={carObj?.pictures[0]} alt={`${carObj?.model}`} style={styles.image} />
        </div>
        <div style={styles.detailsContainer}>
          <h1 style={styles.model}>{carObj?.model || ""}</h1>
          <p style={styles.info}>
            <strong>Make:</strong> {carObj?.make || ""}
          </p>
          <p style={styles.info}>
            <strong>Condition:</strong> {carObj?.condition || ""}
          </p>
          <p style={styles.info}>
            <strong>Mileage:</strong> {carObj?.mileage || ""} miles
          </p>
          <p style={styles.description}>{carObj?.description || ""}</p>
          <p style={styles.info}>
            {/* <strong>Posted By:</strong> {carObj?.postedBy || ""} */}
          </p>
          <p style={styles.price}>${carObj?.price || ""}</p>
          <button style={styles.button}>Contact Seller</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  imageContainer: {
    flex: "1",
      overflow: "none",
    height: "600px"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  detailsContainer: {
    flex: "1",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
  },
  model: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  info: {
    marginBottom: "8px",
    fontSize: "1rem",
    lineHeight: "1.4",
  },
  description: {
    margin: "15px 0",
    fontSize: "1rem",
    color: "#555",
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#27ae60",
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    alignSelf: "center",
    marginTop: "20px",
  },
};
export default CarDetails;
