import React from "react";
import dummyResume from "../../images/resume.pdf";

const Resume = () => {
  return (
    <div className="resume_container">
      <iframe
        className="pdf_container"
        src={dummyResume}
        width={"100%"}
        height={"1000px"}
      ></iframe>
    </div>
  );
};

export default Resume;
