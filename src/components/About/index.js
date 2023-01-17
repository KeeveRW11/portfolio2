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
                    Hi, Im Keeve and I'm learning Fullstack web development. I have always had an interest in technology and remember at the age of 13 pulling down computers and building them back up. 
                    In the age of information technology I have always been interested in knowing how beautiful apps are made. Theres more fun in the creation than the consumption of the content these
                    provide. And i want to have a skill that will always be in need as long as we don't go back to the dark ages. This is my first attempt at a react app.
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