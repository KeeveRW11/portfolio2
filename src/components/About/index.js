import coverImage from "../../assets/cover/cover-image.PNG";

function About() {
    return (
        <section >
            <h1 id="about">Who am I?</h1>          
            <article>
                <p>
                Hi, Im Keeve and I'm learing fullstack web development. I have always had an inteest in technology and remember at the age of 13 pulling down computers and building them back up. 
                In the age of information technology I have always been interested in knowing how beuatiful apps are made. Theres more fun in the creation than the consumption of the content these
                provide. And i want to have a skill that will always be in need as long as we don't go back to the dark ages. This is my first attempt at a react app.
                </p>
            </article>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;