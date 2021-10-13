import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const darkMode = () => {
    props.toggleMode("dark");
  };
  const lightMode = () => {
    props.toggleMode("light");
  };
  const primaryMode = () => {
    props.toggleMode("primary")
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.textColour}`} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.textColour}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.textColour}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch text-${props.textColour}`}>
            <button type="button" class="btn btn-primary mx-3" onClick={primaryMode}>
              Primary
            </button>
            <button
              type="button"
              class="btn btn-light mx-3"
              onClick={lightMode}
            >
              Light
            </button>
            <button type="button" class="btn btn-dark" onClick={darkMode}>
              Dark
            </button>
            {/* <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            /> */}
            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.textMode}
            </label> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Prop types defines property of props which is passed
// In this case props.title will always be string type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

// this function will automatically set value of title
// if nothing is passed in props
Navbar.defaultProps = {
  title: "Set title here",
};
