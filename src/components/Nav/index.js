// import React, { useState } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../Header';
// import About from '../About';
// import Portfolio from '../Project';

function Nav(props) {
  const categories = [ 'About', 'Portfolio', 'Contact', 'Resume' ];

  return (
    <nav className="navbar navbar-expand-lg bg-light display-5">
      <div className="container-fluid">
       <a className="navbar-brand nav-link active " href="About">Keeve</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((categories) => (
            <li className={
                props.currentPage === categories ? "nav-item is-active" : "nav-item"
              } key={categories}>
              <a
                  href={"#" + categories.toLowerCase()}
                  onClick={() => props.handlePageChange(categories)}
                  className={
                    props.currentPage === categories ? "nav-link active" : "nav-link"
                  }> {categories}
              </a>
            </li>
          ))}

         </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;