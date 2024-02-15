import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/UserContext";

export default function Departments() {
  let { token } = useContext(userContext);
  let [data, setData] = useState([]);
  async function getDepartments() {
    let token = localStorage.getItem("token");
    let ip = "192.168.2.5";
    let response = await axios
      .get(`http://${ip}:5678/department`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
    setData(response.data)
  }

  useEffect(() => {
    getDepartments();
  }, []);
  return (
    <><div className="accordion brdr " id="accordionExample">
      {data ? data.map((el) => <div className="accordion-item">
        <h2 className="accordion-header" id={el.id}>
          <button
            className="accordion-button fw fs-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${el.name}`}
            aria-expanded="true"
            aria-controls={el.name}
          >
            {el.name}
          </button>
        </h2>
        <div id={el.name} class="accordion-collapse collapse show" aria-labelledby={el.id} data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {el.id}
          </div>
        </div>
      </div>

      )
        : "dsd"} </div>
    </>
  );
}
