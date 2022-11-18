import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../Header';
// import About from '../About';
// import Portfolio from '../Project';

function Nav() {
  const categories = [
    { 
      name: "portfolio", description: "Portfolio with 6 of my precious works" },
    { 
      name: "Contact", description: "Contact form to connect with me" },
    {
      name: "Resume",description: "Information about my experience",
    },
  ];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const handleClick = () => {
  //   console.log("click handled")
  // }

  return (
  
    <nav className="navbar navbar-expand-lg bg-light display-5">
      <div className="container-fluid">
       <a className="navbar-brand nav-link active " href="About">Keeve</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={"About"}>About Me</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={"Portfolio"}>Portfolio</a>
            </li> */}
                      {categories.map((category) => (
            <li
              className={`mx-1 ${ currentCategory.name === category.name && 'navActive' }`} key={category.name}>
              <span onClick={() => {
                  setCurrentCategory(category)
                }}>{capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}

              {/* {categories.map((category) => (
                      <li className="nav-link" key={category.name} >
                      <span onClick={() => { handleClick(); }}>
                      {capitalizeFirstLetter(category.name)}
                      </span>
                    </li>
              ))} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// {categories.map((category) => (
//   <li
//     className={`mx-1 ${
//       currentCategory.name === category.name && 'navActive'
//       }`}
//     key={category.name}
//   >
//     <span
//       onClick={() => {
//         setCurrentCategory(category)
//       }}
//     >
//       {capitalizeFirstLetter(category.name)}
//     </span>
//   </li>
// ))}



export default Nav;