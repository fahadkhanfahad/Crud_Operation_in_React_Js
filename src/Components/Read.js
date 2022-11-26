import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Read() {
  const [apiData, setapiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://637c795a16c1b892ebb47608.mockapi.io/crud`)
      .then((getData) => {
        setapiData(getData.data);
      });
  }, []);

  const setId = (id) => {
    console.log(id);
    localStorage.setItem("ID", id);
  };

  const getData = (id) => {
    axios
      .get(`https://637c795a16c1b892ebb47608.mockapi.io/crud`)
      .then((getData) => {
        setapiData(getData.data);
      });
  };

  const afterDelete = (id) => {
    axios
      .delete(`https://637c795a16c1b892ebb47608.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*  */}
          {apiData.map((data) => {
            return (
              <tr>
                <td data-label="Job">{data.id}</td>
                <td data-label="Name">{data.firstname}</td>
                <td data-label="Age">{data.lastname}</td>
                <td data-label="update">
                  <Link to="/update">
                    <button
                      type="button"
                      onClick={() => setId(data.id)}
                      class="btn btn-success"
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td data-label="Delete">
                  <Link to="/delete">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        afterDelete(data.id);
                      }}
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
