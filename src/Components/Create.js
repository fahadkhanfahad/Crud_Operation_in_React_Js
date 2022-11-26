import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Create() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  console.log(firstname);
  console.log(lastname);

  const datasend = () => {
    axios.post(
      `https://637c795a16c1b892ebb47608.mockapi.io/crud`,
      {
        firstname,
        lastname
      },
      []
    );
  };

  return (
    <>
      <h3>Operations </h3>
      <form class="ui form">
        <div class="field">
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div class="field">
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div class="field"></div>
        <Link to="/read">
          <button class="ui button" type="submit" onClick={datasend}>
            Submit
          </button>
        </Link>
      </form>
    </>
  );
}
