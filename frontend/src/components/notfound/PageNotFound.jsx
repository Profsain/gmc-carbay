import { Link } from "react-router-dom";

const PageNotFound = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    img: {
      width: "600px",
      height: "300px",
    },
    btn: {
      backgroundColor: "red",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1.2rem",
      marginTop: "1rem",
      display: "inline-block",
      textDecoration: "none",
    },
  };
  return (
    <div className="container mt-5" style={styles.container}>
      <h1 className="text-center">You have gone to the Zoo</h1>
      <img
        style={styles.img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyl3KOobxh1qt0aLElLE6SnF1cFGZ8yo37w&s"
        alt="not found"
      />

      <Link to="/" style={styles.btn}>
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
