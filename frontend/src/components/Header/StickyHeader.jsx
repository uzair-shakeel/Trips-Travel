import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./StickyHeader.css";

const StickyHeader = () => {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.querySelector(".navbar");

      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-80px";

        // Close the Navbar when scrolling down
        const togglerButton = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(
          "#navbarSupportedContent"
        );

        if (togglerButton.classList.contains("collapsed")) {
          togglerButton.classList.remove("collapsed");
          navbarCollapse.classList.remove("show");
        }
      }

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header ">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
        <div className="container px-3 d-flex justify-content-between align-items-center">
          <Link className="navbar-brand logo" to="/">
            <img
              src="/src/assets/images/logo.png"
              alt="Logo"
              className="rounded-pill"
            />
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
          {/* <div
            className="collapse navbar-collapse gap-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 ">
              <li className="nav-item mx-auto">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-auto">
                <NavLink className="nav-link" to="/tours">
                  Tours
                </NavLink>
              </li>
              <li className="nav-item mx-auto">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="nav-btns d-flex align-items-center flex-md-column flex-lg-row justify-content-center gap-2 gap-md-4 mt-lg-0 mt-md-3">
              <button className="btn-login secondary-btn btn">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn-register primary-btn btn ">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default StickyHeader;
