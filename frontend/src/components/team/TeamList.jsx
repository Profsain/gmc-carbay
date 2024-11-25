import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const TeamList = () => {
    const styles = {
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            padding: "40px",
        }
    }
    
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // handle fetch users data
  const fetchUsers = async () => {
    setLoading(true);

    const url = "https://api.github.com/users";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setLoading(false);
      setUsers(data);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Car Bay Team</h2>
      {loading && <p>Loading...</p>}

      <div style={styles.grid}>
        {users.map((user) => (
            <TeamCard
                key={user.id}
                imgUrl={user.avatar_url}
                username={user.login}
                link={user.html_url}
            />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
