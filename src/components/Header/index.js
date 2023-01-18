import React, { useState } from 'react';
import Nav from "../Nav";
import About from "../About"
import Portfolio from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';

function Header () {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
          case "About":
            return <About />;
        case "Portfolio":
            return <Portfolio />;
        case "Contact":
            return <Contact />;
            case "Resume":
                return <Resume />;             
          default:
            return <About />;
        }
    };
    
    return (
        <div className='me-auto sticky-top'>
             <Nav        
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}>
            </Nav>
            <div>{renderPage(currentPage)}</div>
        </div>
    )
}

export default Header