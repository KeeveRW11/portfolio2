// import coverImage from "../../assets/cover/cover-image.PNG";
import coverImage from "../../assets/cover/cover-image2.PNG";

function About() {
    return (
        <section >
            <div>
                <h1 className="d-flex justify-content-center" id="about">Who am I?</h1>
            </div>
            <div className="container">
                <article>
                    <p>
                    Hi, I'm Keeve and I am learning Fullstack Web development. I say I am learning because this is a continuous process. 
                    I have always had an interest in technology and I remember at the age of 13 pulling down computers and building them back up. 
                    In the age of information technology I have always been interested in knowing how beautiful apps are made. 
                    Theres more fun in the creation than the consumption of the content these provide. 
                    The times are changing fast and I want to have skills that will be in need and in the near future.
                    </p>
                </article>
            </div>
            <div className="d-flex justify-content-center"> 
                <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
            </div>          
        </section>
    );
}

export default About;