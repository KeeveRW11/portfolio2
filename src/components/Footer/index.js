import React from 'react';
import ghIcon from "../../assets/icons/github2.png"
import lkIcon from "../../assets/icons/linkedin.png"



function Footer () {
    return (
        <div className='container'>
        <div className="card justify-content-center me-auto sticky-top">
            <div className="d-flex justify-content-center">
                <a href="https://github.com/KeeveRW11" download className="d-flex justify-content-center">
                    <img src={ghIcon} className="card-img-top " style={{ width: "25%" }} alt="cover" />
                </a>
                <a href="https://www.linkedin.com/in/keevewhyte/" download className="d-flex justify-content-center">
                    <img src={lkIcon} className="card-img-top " style={{ width: "25%" }} alt="cover" />
                </a>
            </div>              
        </div>
        </div>
    )
}

export default Footer