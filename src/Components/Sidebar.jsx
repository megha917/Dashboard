import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGears,
  faAngleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = ({isSidebarOpen, toggleSidebar}) => {

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
    
      <header id="header">
        <div className="d-flex flex-column">
          <nav
            id="navbar"
            className={`nav-menu navbar ${isSidebarOpen ? "open" : ""}`}
          >
            <ul>
              <li className="mb-3">
                <h6 className="fs-5 text-white my-2 py-2">
                  <FontAwesomeIcon icon={faGears} className="fs-4 mx-1 px-1" />
                  Analytics
                </h6>
              </li>
              {SidebarData.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.link} className="nav-link scrollto">
                    <i>
                      {" "}
                      <FontAwesomeIcon icon={item.icon} />{" "}
                    </i>
                    <span>{item.title}</span>
                    <p
                      className="d-flex sidebar-arrow"
                      style={{ marginLeft: "auto" }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                    </p>
                    </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button onClick={toggleSidebar} className="mobile-nav-toggle">
            <i className={`bx ${isSidebarOpen ? "bx-x" : "bx-list"}`}>
              <FontAwesomeIcon icon={faBars} />
            </i>
          </button>
        </div>
      </header>
      <div className="container-fluid d-flex justify-content-between sidebar-profile px-1">
        <i className="d-flex align-items-center">
          <img src="./woman.png" alt="" className="sidebar-profile-img" />
        </i>
        <p className="text-start d-flex flex-column mt-2">
          Olivia
          <small className="m-0 p-0">Project Manager</small>
        </p>
        <i className="fs-6 d-flex align-items-center sidebar-profile-icon">
          <FontAwesomeIcon icon={faChevronDown} />
        </i>
      </div>
    </div>
  );
};

export default Sidebar;
