import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getprojects } from "../../../actions/projectAction";
import ModalImage from "react-modal-image";
import { domainName } from "../../../apis/serverApi"; 

const Projects = ({ reff }) => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getprojects());
  }, [dispatch]);

  const project = projects.map((proj) => {
    return (
      <div
        key={proj._id}
        className="col-lg-4 col-12 mb-lg-0 mb-4 mt-lg-5 py-3 shadow-lg bg-white rounded"
      >
        <div className="view overlay rounded z-depth-1">
          <ModalImage
            small={domainName + proj.projectImage}
            large={domainName + proj.projectImage}
            alt={proj.title}
          />
        </div>
        <div className="card-body pb-0">
          <h5 className="font-weight-bold ">{proj.title}</h5>
          <p className="grey-text" style={{height: "90px", marginTop: "20px", fontSize: "14px"}}>{proj.description}</p>
          <p
            className=" fw-bold"
            style={{
              fontSize: "16px",
              color: "#55107E",
              display: "inline",
            }}
          >
            Technologies:
          </p>
          <p style={{ fontSize: "15px", color: "gray", fontWeight: "500", height:"50px"}}> {proj.technologies}</p>
          <div>
          {proj.haveLink && (
            <a
              className="btn btn-primary btn-sm shadow-none mb-0"
              target="_blank"
              rel="noreferrer"
              href={proj.link}
            >
              <i className="fa fa-globe left"></i> View project
            </a>
          )}
          { " "}
          {proj.haveLink && (
            <a
              className="btn btn-primary btn-sm shadow-none mb-0"
              target="_blank"
              rel="noreferrer"
              href={proj.githublink}
            >
              <i className="fab fa-github left"></i> View Source Code
            </a>
          )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      id="projects"
      ref={reff}
      className="text-center py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold mb-5">Projects</h2>

        <div className="row text-center d-inline-flex">{project}</div>
      </div>
    </section>
  );
};

export default Projects;
