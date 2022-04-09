import React, { useEffect } from "react";
import educationImage from "../../../assets/images/education.png";
import { useSelector, useDispatch } from "react-redux";
import { getEducations } from "../../../actions/educationAction";
import moment from "moment";
import { domainName } from "../../../apis/serverApi"; 

const Education = ({ reff }) => {
  const dispatch = useDispatch();
  const educations = useSelector((state) => state.educations);

  useEffect(() => {
    dispatch(getEducations());
  }, [dispatch]);

  const education = educations.map((edu) => {
    return (
      <div key={edu._id} style={{display: "flex", flexWrap: "wrap", alignItems:"center", justifyContent: "center"}}>
      <img src={domainName + edu.collegelogo} alt={edu.school} width="130px" style={{borderRadius: "50%"}}/>
      <div className="col-xl-5 col-md-5 col-10 mx-5">
        <p className="fw-bold mb-3" style={{ fontSize: "19px" }}>
          {edu.title}
        </p>
        <p className="mb-3" style={{ fontSize: "14px", fontWeight: "500"}}>
          {edu.school}, {edu.city}
        </p>
        <p className="grey-text" style={{ fontSize: "13px" }}>
          {moment(edu.startDate).format("MMM YYYY")} -{" "}
          {moment(edu.endDate).format("MMM YYYY")}
        </p>
        <hr className="mb-4" />
      </div>
      </div>
    );
  });

  return (
    <section
      ref={reff}
      id="education"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Education
        </h2>
          <div className="col-lg-3 col-md-12 mx-auto">
            <img
              className="img-fluid mb-3 d-none d-lg-inline"
              src={educationImage}
              alt="education"
            />
          </div>
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="row mb-3">{education}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
