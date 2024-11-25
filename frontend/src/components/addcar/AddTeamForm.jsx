import { useState } from "react";
import "./AddTeamForm.css";
import TeamCard from "../team/TeamCard";

const AddTeamForm = () => {
  // state to hold form data
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [teamObj, setTeamObj] = useState({});

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeam = {
      name,
      link,
      imgUrl,
    };

    // update teamObj state
    setTeamObj(newTeam);

    // clear form
    setName("");
    setLink("");
    setImgUrl("");
  };
  return (
    <div>
      <div className="container">
        <div>
          <h1>Add New Team</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="link">GitHub Link:</label>
              <input
                type="text"
                id="link"
                name="link"
                placeholder="Enter GitHub link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="imgUrl">Profile Image Url:</label>
              <input
                type="text"
                id="imgUrl"
                name="imgUrl"
                placeholder="Enter image url"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>

            <button type="submit">Add Team</button>
          </form>
        </div>

        <div>
          <h2>Team Card</h2>
          {teamObj.name && (
            <TeamCard
              imgUrl={teamObj.imgUrl}
              username={teamObj.name}
              link={teamObj.link}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTeamForm;
