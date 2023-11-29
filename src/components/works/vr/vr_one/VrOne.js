import React from "react";
import "./VrOne.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";

const VrOne = () => {
  const location = useLocation();
  const imgList = [];

  return (
    <div className="vrone_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="vrone_c_one">
          <h3>About : </h3>
          <p>
            A tracheostomy procedure was necessary for Patrick, 57, because of
            an infection in his epiglottis. It is your duty as a nurse to carry
            out post-operative tracheostomy care procedures. The tracheostomy
            procedure is a major surgical procedure that entails a significant
            risk of complications. The post-procedural care is critical to the
            success of the surgery, and this is where caring nurses play a
            critical role.
          </p>
          <p>
            Through this virtual reality session, students can practice
            administering tracheostomy care regimens with ease and proficiency.
          </p>
        </div>
        <div className="vrone_c_two">
          <h3>Features : </h3>
          <p>
            There are two sections to this module. One is the learning phase,
            where a user interface (UI) will display the tasks that currently
            need to be completed along with highlight markers. No task user
            interface (UI) or highlight markers will be displayed in the other
            mode, called assessment mode. For a student to successfully complete
            the assessment phase, the learning phase must be completed. When in
            assessment mode, students will see their progress on a user
            interface (UI) and have three opportunities to make mistakes during
            each session. If they make a mistake, the user interface will
            display the correct task. If they run out of opportunities, they
            must start over from scratch.
          </p>
          <p>
            Additionally, this module offers a multiplayer session where
            multiple students can participate and complete the learning and
            assessment tasks together. It also has a menu for selecting levels,
            logging in, and adjusting the speed of the VR simulation.
          </p>
        </div>
        <div className="vrone_c_three">
          <h3>Lesson - 1 (Scene Set-up) : </h3>
          <p>
            To get the patient's cooperation, it is essential to talk to them
            and educate them about the procedure. In this module on patient
            preparation, students practice speaking and interacting with virtual
            patients. Additionally, learners will gather the tools and materials
            needed for the procedure. These are offered as affordances that will
            help the students finish their assignments. For a realistic
            experience, all affordances present physics-based interactions.
          </p>
          <h4>Procedure : </h4>
          <h5>Introduction and Verification : </h5>
          <p>
            Initiate the procedure by introducing yourself to the patient and
            ensuring they are informed and comfortable with the upcoming
            tracheostomy care. Verify the patient's understanding and consent
            for the procedure.
          </p>
          <h5>Bed Height Adjustment : </h5>
          <p>
            Using the remote control, adjust the height of the bed to a
            comfortable and precise level for the player.
          </p>
          <h5>Expiration Date Check : </h5>
          <p>
            Thoroughly examine sterile supplies, including the tracheostomy care
            kit, tracheostomy tubes, obturator, and inner cannulas, as well as
            the water-soluble lubricant, to ensure they are within their
            specified expiration dates.
          </p>
          <h5>Supply Preparation : </h5>
          <p>
            Collect all necessary supplies required for the tracheostomy care
            procedure and arrange them in proximity to the bedside table for
            easy accessibility.
          </p>
          <h5>Resuscitation Bag Placement : </h5>
          <p>
            Position the resuscitation bag on the bed beside the patient,
            ensuring it is readily available when needed during the procedure.
          </p>
          <h5>Gown, Mask, and Safety Goggles : </h5>
          <p>
            Provide the patient with a gown and designate a highlighted zone
            where they can don the gown. Additionally, instruct the patient to
            wear a mask and safety goggles to maintain a sterile environment.
          </p>
          <h5>Sterile Field Setup : </h5>
          <p>
            Place the tracheostomy care kit near the bedside table and open it.
            Inside the kit, position the drape on the table to establish a
            sterile field for the upcoming procedure.
          </p>
          <h5>Inner Cannula Preparation : </h5>
          <p>
            Carefully open the inner cannula package and gently deposit its
            contents onto the sterile field, taking care not to touch any
            sterile items.
          </p>
          <h5>Glove Application : </h5>
          <p>
            Inside the tracheostomy care kit, locate and wear the provided
            gloves. Once gloved, arrange all required items on the sterile
            drape, ensuring their placement within the sterile field.
          </p>
          <h5>Saline Preparation : </h5>
          <p>
            Unscrew the lid from the saline bottle using your non-dominant hand,
            taking care not to touch the inner rim of the bottle. Place the
            bottle cap upside down on the non-sterile part of the table.
            Gradually pour the normal saline into all three designated wells
            within the kit, ensuring the sterile field remains uncompromised
            during the process. At this point, your left hand is considered
            contaminated. Recap the saline bottle lid using your non-dominant
            hand.
          </p>
          <h5>Gauze and Applicator Placement : </h5>
          <p>
            Transfer gauze 4x4 pads and cotton-tipped applicators into well 3 of
            the kit, specifically designated for inner cannula care.
          </p>
        </div>
        <div className="vrone_c_four">
          <h3>Lesson - 2 - Cuff Inflation and Deflation : </h3>
          <p>
            The tracheostomy tube must be positioned correctly in order for it
            to work as intended. Further complications such as aspiration may
            arise from a dislocated tube. In addition to keeping the cuff in
            place, it is critical to keep the pressure inside the cuff at the
            ideal range of 20 to 25 mmHg. This Cuff Inflation and Deflation
            module gives students practice using a manometer to first deflate
            the cuff and then inflate it. A comprehensive practice session is
            made possible by the availability of necessary affordances and
            detailed instructions.
          </p>
          <h4>Procedure : </h4>
          <h5>Introduction and Verification : </h5>
          <p>
            Begin by introducing yourself to the patient and confirming their
            identity and consent for the procedure.
          </p>
          <h5>Bed Adjustment : </h5>
          <p>
            Utilize the remote control to adjust the bed's height to a level
            that is comfortable and suitable for the patient. Additionally,
            rotate the bed's head portion by pressing the highlighted button on
            the remote to achieve the desired positioning.
          </p>
          <h5>Oxygen Trach Collar Removal : </h5>
          <p>
            Remove the oxygen trach collar by unsnapping it from one side,
            ensuring careful handling to prevent damage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VrOne;
