import React from "react";
import "./Work.css";
import valorant from "../../../images/valorant.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DevThree from "../../works/development/dev_three/DevThree";
import devThree from "../../../images/dev_three/Level/3L_2.png";
import protThree from "../../../images/prototype/Prototype/3_7.png";
import trach from "../../../images/Trach-L3.jpg";

const Work = () => {
  const [id, setId] = useState();
  const navigate = useNavigate();

  const work_card_object = [
    {
      id: "dev_3",
      title: "AMAZE - A Third Person Adventure",
      image_src: devThree,
      project_title: "AMAZE - A Third Person Adventure",
      created_at: "04/03/2022",
      project_type: "Development",
      project_description: `"AMAZE" is an enthralling and thought-provoking video game that immerses players in the shoes of an archaeology student on an intriguing quest. Tasked with rediscovering the enigmatic ancient Benin wall and selecting a precious artifact for analysis, the game unveils a mysterious twist. The once-familiar walls have been re-engineered, transforming them into a complex maze filled with challenges and secrets waiting to be unraveled.`,
      carousal_imageList: [],
    },
    {
      id: "prot_3",
      title: "THE CHRONICLES OF AMUSOR",
      image_src: protThree,
      project_title: "THE CHRONICLES OF AMUSOR",
      created_at: "04/03/2022",
      project_type: "Prototype",
      project_description:
        "The theme of the challenge that led to the creation of this title is Haunted House. Sincerely, not every member of the team was aware of this. We were spontaneous, and our idea, in the end, leaned towards the theme. Interesting enough, it started from musing about Home Alone, and here we are with the title: The Chronicles of Amusor (COA), a game about the horrific experience of a student at his family house for the Christmas holiday.",
      carousal_imageList: [],
    },
    {
      id: "vr_1",
      title: "Tracheostomy Care",
      image_src: trach,
      project_title: "Tracheostomy Care",
      created_at: "04/03/2022",
      project_type: "Virtual Reality",
      project_description: `A tracheostomy procedure was necessary for Patrick, 57, because of an infection in his epiglottis. It is your duty as a nurse to carry out post-operative tracheostomy care procedures. 
      The tracheostomy procedure is a major surgical procedure that entails a significant risk of complications. The post-procedural care is critical to the success of the surgery, and this is where caring nurses play a critical role.`,
      carousal_imageList: [],
    },
  ];
  return (
    <div className="work_container">
      <div
        className="work_card c_one"
        key={work_card_object[0].id}
        onClick={() => {
          setId(work_card_object[0].id);
          navigate(`/works/developmentdetails/dev_3`, {
            state: { object: work_card_object[0] },
          });
        }}
      >
        <div className="img-section">
          <img className="work_image" src={devThree} alt="" />
        </div>
        <div className="text_section">
          <h3 className="card_heading">{work_card_object[0].project_title}</h3>
          <p className="card_description">
            {work_card_object[0].project_description}
          </p>
        </div>
      </div>
      <div
        className="work_card c_two"
        key={work_card_object[1].id}
        onClick={() => {
          setId(work_card_object[1].id);
          navigate(`/works/prototypes/prot_3`, {
            state: { object: work_card_object[1] },
          });
        }}
      >
        <div className="text_section">
          <h3 className="card_heading">{work_card_object[1].project_title}</h3>
          <p className="card_description">
            {work_card_object[1].project_description}
          </p>
        </div>
        <div className="img-section">
          <img className="work_image" src={protThree} alt="" />
        </div>
      </div>
      <div
        className="work_card c_three"
        key={work_card_object[2].id}
        onClick={() => {
          setId(work_card_object[2].id);
          navigate(`/works/vrprojects/vr_1`, {
            state: { object: work_card_object[2] },
          });
        }}
      >
        <div className="img-section">
          <img className="work_image" src={trach} alt="" />
        </div>
        <div className="text_section">
          <h3 className="card_heading">{work_card_object[2].project_title}</h3>
          <p className="card_description">
            {work_card_object[2].project_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
