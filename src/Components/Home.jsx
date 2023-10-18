import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid d-flex justify-content-between p-2 home" id="home">
      <p className="float-start m-3 px-3">
        Good Morning Olivia
        <i>
          <FontAwesomeIcon icon={faSun} style={{ color: "rgb(255,212,59)" }} className="px-1 fs-5" />
        </i>
      </p>
      <form role="search" className="d-flex searchbar my-2 position-relative">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="position-absolute top-50 start-0 translate-middle-y ms-3" />
      </form>
    </div>
  );
};

export default Home;
