import { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

export default function Create() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [ID, setID] = useState(null);
  console.log(firstname);
  console.log(lastname);

  const datasend = () => {
    axios.put(`https://637c795a16c1b892ebb47608.mockapi.io/crud/${ID}`, {
      firstname,
      lastname
    });
  };

  useEffect(() => {
    setFirstname(localStorage.getItem("firstname"));
    setLastname(localStorage.getItem("lastname"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <>
      <h3>Operations </h3>
      <form class="ui form">
        <div class="field">
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            value={firstname}
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div class="field">
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={lastname}
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div class="field"></div>
        <button class="ui button" type="submit" onClick={datasend}>
          Submit
        </button>
      </form>
    </>
  );
}
