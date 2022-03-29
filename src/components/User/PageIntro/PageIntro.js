import React from "react";
import "./styles.css";
import homeImage from "../../../assets/images/dev.svg";
import Pdf from "../../../assets/Satya-Resume-FSWD.pdf";
const onResumeClick = () => {
  window.open(Pdf)
}

const PageIntro = ({ reff }) => {
  return (
    <section ref={reff}>
      <div className="container">
        <div className="row">
          <div id="intro-section" className="col">
            <div className=" rgba-gradient d-flex justify-content-center align-items-center header">
              <div className="container px-md-3 px-sm-0">
                <div className="row">
                  <div className="col-md-12 mb-4  text-center">
                    <h3
                      className="display-3 fw-bold   pt-md-5 pt-5"
                      style={{ color: "#2A083F" }}
                    >
                      Full Stack Web Developper
                    </h3>
                    <br />
                    <a onClick={onResumeClick} style={{ border: "1px solid blue", background: "blue", padding: 10, borderRadius: "5px", cursor:"pointer" }}>
                      See My Resume
                    </a>
                    <hr className=" my-4 text-light" />
                    <div className="text-center text-md-right">
                      <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                          <a
                            href="https://www.facebook.com/satya.p.mall"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-floating btn-sm text-white"
                            style={{ fontSize: "23px" }}
                          >
                            <i className="fab fa-facebook-f icons-color"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="https://twitter.com/SatyaMall895380"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-floating btn-sm text-white"
                            style={{ fontSize: "23px" }}
                          >
                            <i className="fab fa-twitter icons-color"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="https://www.linkedin.com/in/satya-prakash-mall-125649216/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-floating btn-sm text-white"
                            style={{ fontSize: "23px" }}
                          >
                            <i className="fab fa-linkedin-in icons-color"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="https://github.com/Satyamall"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-floating btn-sm text-white"
                            style={{ fontSize: "23px" }}
                          >
                            <i className="fab fa-github icons-color"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="mailto: thesatyamall123@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-floating btn-sm text-white"
                            style={{ fontSize: "23px" }}
                          >
                            <i className="fa-regular fa-envelope icons-color"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-inline">
            <div className=" rgba-gradient d-flex justify-content-center align-items-center header">
              <div className="container px-md-3 px-sm-0">
                <div className="row">
                  <div className="col-md-12 mb-4 mt-3 ms-5 text-center dev-img">
                    <img
                      className="img-fluid mt-3 ms-5 "
                      src={homeImage}
                      alt="home"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
