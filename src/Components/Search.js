import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setLocation } from "../Store/Reducers";
import "../Assets/CSS/Search.scss";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()
  const getData = () => {
    dispatch(setLocation(search))
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
                value={search}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getData();
                  }
                }}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button
                className="border-0 bg-transparent text-danger"
                onClick={() => setSearch("")}
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
