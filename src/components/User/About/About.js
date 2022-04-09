import React from "react";
import profile from "../../../assets/images/SatyaProfile.jpg";
import "./About.css";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          About Me
        </h2>

        <div className="row">
          <div className="col-12 col-lg-4">
            <img className="d-block mx-auto mb-4 imgprofile" src={profile} alt="Satya" />
          </div>
          <div className="col-lg-8">
            <p className="text-font text-justify">
              I am a Full Stack Web Developer. Aspiring Full Stack Web Developement at coding bootcamp Masai School. <br/> Also
              I am an engineering student in the final year of Computer Science and
              Engineering at Rajkiya Engineering College Sonbhadra, U.P.
              <br /> Through my university studies, I acquired strong skills in
              the field of software engineering.
              <br /> Motivated, I know how to adapt, I have a sense of
              responsibility and organization.
              <br />My hobbies are Web Developing, Chess, watching movies, cricket and listening to music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
