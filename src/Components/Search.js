import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Assets/CSS/Search.css";

const Search = () => {
  const [location, setLocation] = useState("");
  const key = "0dba95d4614a12636329ca02ac3037b7";

  console.log("location", location);

  const getData = async () => {
    try {
      const api = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${key}&units=metric`;
      const response = await axios.get(api);
      console.log("data", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="search-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-10">
            <div className="p-2 border border-1 rounded-4">
              <input
                type="text"
                className="w-75 border-0 bg-dark"
                placeholder="Search"
                value={location}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getData();
                  }
                }}
                onChange={(e) => setLocation(e.target.value)}
              ></input>
              <button
                className="border-0 bg-transparent text-danger"
                onClick={() => setLocation("")}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <button className="border-0 bg-transparent text-white" onClick={getData}>
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
