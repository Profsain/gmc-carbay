import PropTypes from "prop-types";
const CarCard = ({
  carImg = "https://pictures-nigeria.jijistatic.net/152753602_OTQyLTcwNy1lNDhjMjdjMDM0.webp",
  model = " Test Model",
  postedBy = " Test User",
  openFunc,
}) => {
  return (
    <div style={styles.card} onClick={openFunc}>
      <img src={carImg} alt={`${model}`} style={styles.image} />
      <div style={styles.details}>
        <h2 style={styles.model}>{model}</h2>

        <p style={styles.info}>
          <strong>Posted By:</strong> {postedBy}
        </p>

        <button style={styles.button}>View Details</button>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  carImg: PropTypes.any,
  condition: PropTypes.any,
  description: PropTypes.any,
  make: PropTypes.any,
  mileage: PropTypes.any,
  model: PropTypes.any,
  postedBy: PropTypes.any,
  openFunc: PropTypes.func,
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "20px",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  details: {
    padding: "15px",
  },
  model: {
    fontSize: "1.5rem",
    margin: "0 0 10px",
    color: "#333",
  },
  info: {
    margin: "5px 0",
    fontSize: "0.9rem",
    color: "#666",
  },
  description: {
    margin: "10px 0",
    fontSize: "0.9rem",
    color: "#444",
  },
  price: {
    margin: "15px 0",
    fontSize: "1.2rem",
    color: "#27ae60",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    width: "100%",
  },
};

export default CarCard;
