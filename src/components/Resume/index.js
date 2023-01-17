import jsIcon from "../../assets/icons/javascript.png"
import htmlIcon from "../../assets/icons/html.png"
import cssIcon from "../../assets/icons/css3.png"
import bsIcon from "../../assets/icons/bootstrap.png"
import reactIcon from "../../assets/icons/react.png"
import expressIcon from "../../assets/icons/express.png"
import mongoIcon from "../../assets/icons/mongodb.png"
import nodeIcon from "../../assets/icons/nodejs.png"
import gitIcon from "../../assets/icons/git.png"
import ghIcon from "../../assets/icons/github.png"
import sqlIcon from "../../assets/icons/mysql.png"
import fileIcon from "../../assets/icons/file.png"
import resume from "../../assets//Keeve_Resume_FSD.pdf"

function Resume() {
    return (
      <div className="container">
        <div className="column">
          <p className="content is-medium text-center">
            To view my resume please click the icon below.</p>
          <div className="d-flex justify-content-center">
            <a href={resume} download className="d-flex justify-content-center">
              <img src={fileIcon} className="card-img-top " style={{ width: "25%" }} alt="cover" />
            </a>

          </div>  
         <div>
            <div className="card rounded mx-auto d-block" style={{width: "100%"}}>
              <img src={jsIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={htmlIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={cssIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={bsIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={gitIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={ghIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={mongoIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={expressIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={reactIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={nodeIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <img src={sqlIcon} className="card-img-top" style={{ width: "15%" }} alt="cover" />
              <div className="card-body">
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Resume;