
const TeamCard = ({imgUrl, username, link}) => {
    const styles = {
        card: {
            width: "200px",
            height: "300px",
            border: "2px solid orange",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
        },
        img: {
            width: "100%",
            height: "50%",
            borderRadius: "10px",
        },
    }
  return (
    <div style={styles.card}>
      <img style={styles.img} src={imgUrl || "https://avatars.githubusercontent.com/u/1?v=4"} alt={`${username} profile picture`} />

          <h3>Username: { username || "name"}</h3>
      <p>
        <a href={link}>GitHub Link</a>
      </p>
    </div>
  );
}

export default TeamCard