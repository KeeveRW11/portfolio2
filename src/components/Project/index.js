// import { capitalizeFirstLetter } from '../../utils/helpers';
// import Carousel from 'react-bootstrap/Carousel';

import photo from "../../assets/projects/giglrrr.png"
import photo1 from "../../assets/projects/anightin.png"
import photo3 from "../../assets/projects/letstakenote.png"
import photo4 from "../../assets/projects/pizzahunt.png"
import photo5 from "../../assets/projects/travotel.png"
import photo2 from "../../assets/projects/zookeeper.png"

function Portfolio() {
    const currentCategory = {
        name: "portfolio", description: "Portfolio with 6 of my precious works" 
    };    
    return (
        <div className="container">
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src={photo} alt=""/>
                    <div className="card-body">
                    <h5 className="card-title">Giglr</h5>
                    <p className="card-text">Giglr is an application which uses CRUD operations to share memes. Information on the full stack used to build this site can be found on the git repository readme.</p>
                    <div className="d-flex justify-content-center">
                        <a href="https://github.com/KeeveRW11/giglr" className="btn btn-primary">Github Repository</a>
                        <a href="https://giglr.herokuapp.com/" className="btn btn-success">Deployed Application</a>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={photo1} alt=""/>
                    <div className="card-body">
                    <h5 className="card-title">A Night In</h5>
                    <p className="card-text">Stuck inside and need some ideas for entertainment, look no further than A Night In App. Information on the full stack used to build this site can be found on the git repository readme.</p>
                    <div className="d-flex justify-content-center">
                        <a href="https://github.com/KeeveRW11/A-Night-In" className="btn btn-primary">Github Repository</a>
                        <a href="https://raposamillar.github.io/A-Night-In/" className="btn btn-success">Deployed Application</a>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={photo5} alt=""/>
                    <div className="card-body">
                    <h5 className="card-title">Travotel</h5>
                    <p className="card-text">Trying to get a quick trip to a warmer place. This simple application allows you to make online bookings quick and easily. Information on the full stack used to build this site can be found on the git repository readme.</p>
                                        <div className="d-flex justify-content-center">
                        <a href="https://github.com/KeeveRW11/hotel_booking" className="btn btn-primary">Github Repository</a>
                        <a href="https://bilingualhotelbooking.herokuapp.com" className="btn btn-success">Deployed Application</a>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src={photo3} alt=""/>
                    <div className="card-body">
                    <h5 className="card-title">Giglr</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-center">
                        <a href="https://github.com/KeeveRW11" className="btn btn-primary">Github Repository</a>
                        <a href="https://github.com/KeeveRW11" className="btn btn-success">Deployed Application</a>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={photo4} alt=""/>
                    <div className="card-body">
                    <h5 className="card-title">A Night In</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                         <div className="d-flex justify-content-center">
                        <a href="https://github.com/KeeveRW11" className="btn btn-primary">Github Repository</a>
                        <a href="https://github.com/KeeveRW11" className="btn btn-success">Deployed Application</a>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={photo2} alt=""/>
                    <div className="card-body">
                    <h5 className="card-title">Travotel</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <div className="d-flex justify-content-center">
                        <a href="https://github.com/KeeveRW11" className="btn btn-primary">Github Repository</a>
                        <a href="https://github.com/KeeveRW11" className="btn btn-success">Deployed Application</a>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>







        







        // <section>
        //     <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        //     <p>{currentCategory.description}</p>
        //     <Carousel>
        //     <Carousel.Item>
        //         <img className="d-block w-100 img-fluid"src={photo}alt="Giglr"/>
        //         <Carousel.Caption>
        //         <h3>Getting Gigly with it</h3>
        //         <p>Giglr is a site that uses CRUD operations to allow users to interact with other user post.</p>
        //         {/* <a href="https://github.com/KeeveRW11/giglr"</a> */}
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img className="d-block w-100" src={photo2} alt="Second slide"/>
        //         <Carousel.Caption>
        //         <h3>Second slide label</h3>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block w-100"
        //         src={photo3}
        //         alt="Third slide"
        //         />

        //         <Carousel.Caption>
        //         <h3>Third slide label</h3>
        //         <p>
        //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //         </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block w-100"
        //         src={photo4}
        //         alt="Third slide"
        //         />

        //         <Carousel.Caption>
        //         <h3>Third slide label</h3>
        //         <p>
        //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //         </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block w-100"
        //         src={photo5}
        //         alt="Third slide"
        //         />

        //         <Carousel.Caption>
        //         <h3>Third slide label</h3>
        //         <p>
        //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //         </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block w-100"
        //         src={photo6}
        //         alt="Third slide"
        //         />

        //         <Carousel.Caption>
        //         <h3>Third slide label</h3>
        //         <p>
        //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //         </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     </Carousel>
        // </section>
);
}



export default Portfolio;