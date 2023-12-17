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
        <a href="https://medvr.education/solution/tracheostomy-care/">
          https://medvr.education/solution/tracheostomy-care/
        </a>
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
          <h5>Tubing Tracing : </h5>
          <p>
            Examine the tubing from the patient to its point of origin to
            confirm the appropriate connection for attaching the syringe to the
            cuff pilot balloon port.
          </p>
          <h5>Syringe Attachment : </h5>
          <p>
            With one hand, hold the cuff balloon port, and with the other hand,
            take the 10cc syringe and attach it to the cuff balloon port with a
            twisting motion to secure it in place.
          </p>
          <h5>Syringe Withdrawal : </h5>
          <p>
            Grasp the syringe with one hand and, with the other hand, slowly
            withdraw the syringe plunger until resistance is encountered. Then,
            twist the syringe with one hand while holding the port with the
            other hand to safely remove the syringe.
          </p>
          <h5>Stethoscope Placement : </h5>
          <p>
            During the patient's inspiration, position a stethoscope over the
            larynx to listen for a small air leak, which is an important part of
            the procedure.
          </p>
          <h5>Syringe Preparation : </h5>
          <p>
            Take a 10cc syringe with your left hand and, with your right hand,
            pull back on the plunger until 10cc of air is in the syringe. Attach
            the syringe to the cuff pilot balloon port, and depress the syringe
            slowly with your right thumb until fully depressed.
          </p>
          <h5>Syringe Removal : </h5>
          <p>
            After completing the syringe operation, twist to remove the syringe
            safely.
          </p>
          <h5>Cuff Pilot Balloon Port Attachment : </h5>
          <p>
            Connect the cuff pilot balloon port to the cuff pressure manometer.
          </p>
          <h5>Pressure Adjustment : </h5>
          <p>
            Verify that the cuff pressure reads between 20 to 25 cm H2O. If the
            manometer reads below this range (e.g., 15 cm H2O), squeeze the
            manometer bulb with your hand until the desired pressure of 20 to 25
            cm H2O is achieved.
          </p>
          <h5>Separation of Components : </h5>
          <p>
            To complete the cuff pressure adjustment, grasp the cuff pilot
            balloon port with your left hand and the manometer with your right
            hand, and gently pull them apart.
          </p>
          <h5>Trach Collar Placement : </h5>
          <p>Snap the trach collar into its designated place.</p>
          <h5>Lung Assessment : </h5>
          <p>
            Conclude the procedure by using a stethoscope to listen to the
            patient's lungs, ensuring that everything is functioning as expected
            and the patient's well-being is maintained.
          </p>
        </div>
        <div className="vrone_c_five">
          <h3>Lesson - 3 - Opened Suctioning : </h3>
          <p>
            In order to prevent blockages, preserve the tracheostomy tube's
            integrity, and keep the tube clear for comfortable breathing,
            suctioning is a crucial procedure. Patients who do not require a
            continuous oxygen supply can utilize the open suctioning method.
            This virtual scenario includes a virtual patient, along with other
            necessary equipment and affordances like a suction machine and
            catheter kit. With thorough guidance and instructions, users can
            hone the skill to perfection.
          </p>
          <h4>Procedure : </h4>
          <h5>Introduction and Verification : </h5>
          <p>
            Commence the procedure by introducing yourself to the patient and
            confirming their identity. Informed consent for changing and
            cleaning the patient's tracheostomy should be obtained from the
            patient.
          </p>
          <h5>Hand Sanitization : </h5>
          <p>
            Prior to any procedure, ensure hand hygiene by thoroughly cleaning
            your hands with hand sanitizer to minimize the risk of
            contamination.
          </p>
          <h5>Vital Sign Check : </h5>
          <p>
            Utilize the monitor to check the patient's blood pressure, heart
            rate, respiratory rate, and O2 saturation. Press the button on the
            monitor to cycle through blood pressure measurements.
          </p>
          <h5>Breath Sounds Assessment : </h5>
          <p>
            With a stethoscope, auscultate breath sounds over both the upper and
            lower, as well as the left and right sides of the patient's chest.
            Listen in the following sequence: right upper to left upper, then
            right lower to left lower chest.
          </p>
          <h5>Patient Explanation : </h5>
          <p>
            Clearly explain the upcoming procedure to the patient, ensuring they
            are fully informed and comfortable with the process.
          </p>
          <h5>Hand Sanitization : </h5>
          <p>
            Reiterate hand hygiene by cleaning your hands with hand sanitizer.
          </p>
          <h5>Glove Preparation : </h5>
          <p>
            Retrieve gloves from the non-sterile glove box with the respective
            hands to wear them.
          </p>
          <h5>Sterile Field Setup : </h5>
          <p>
            Place a sterile field on the patient's chest, taking care to
            maintain a sterile environment throughout the procedure.
          </p>
          <h5>Saline Solution Preparation : </h5>
          <p>
            Open the bottle cap with your left hand and pour the saline solution
            into a kidney basin for later use.
          </p>
          <h5>Sterile Glove Application : </h5>
          <p>
            Open the kit with your right hand. Dispose of non-sterile gloves and
            wear the sterile gloves provided inside the kit to maintain a
            sterile field.
          </p>
          <h5>Catheter Handling : </h5>
          <p>
            Using your dominant (sterile) hand, pick up the catheter, ensuring
            it remains coiled to prevent contact with non-sterile objects.
          </p>
          <h5>Catheter Attachment : </h5>
          <p>
            With your non-dominant (sterile) hand, manipulate the connecting
            tubing and attach the suction catheter to the tubing. Adjust the
            suction regulator to 120 mmHg with your left hand. Place your index
            finger over the catheter opening to test suction.
          </p>
          <h5>Lubrication : </h5>
          <p>
            Dip the catheter tip in normal saline solution or sterile water to
            lubricate the outside of the catheter, reducing tissue trauma during
            insertion.
          </p>
          <h5>Internal Lubrication : </h5>
          <p>
            While the catheter tip is immersed in sterile normal saline solution
            or sterile water, occlude the suction control valve with the thumb
            of your non-dominant (non-sterile) hand. Suction a small amount of
            solution or water through the catheter to lubricate its inside,
            facilitating the passage of secretions.
          </p>
          <h5>Hyperoxygenation : </h5>
          <p>
            Administer 100% oxygen to the patient for 30 to 60 seconds to
            hyperoxygenate. This can be done using a ventilator by pressing the
            hyperoxygenate button.
          </p>
          <h5>Trach Tube Disconnection : </h5>
          <p>
            Gently disconnect the vent tube at the tracheostomy using your left
            thumb and index finger. Let it rest on a sterile drape.
          </p>
          <h5>Catheter Insertion : </h5>
          <p>
            With your right hand, gently insert the suction catheter into the
            tracheostomy opening until resistance is encountered or until the
            patient initiates a productive cough, up to a maximum of 6 inches.
          </p>
          <h5>Catheter Removal : </h5>
          <p>
            Place a non-dominant thumb over the control valve and simultaneously
            withdraw the suction catheter. Use your dominant hand to grasp the
            suction catheter with your thumb and forefinger, gently pulling it
            out while employing a rotating motion. Continue pulling and rolling
            the catheter until the catheter tip exits the tracheostomy opening.
          </p>
          <h5>Tracheostomy Tube Stabilization: : </h5>
          <p>
            Utilize your non-dominant (non-sterile) hand to stabilize the tip of
            the tracheostomy tube while withdrawing the catheter, preventing
            mucous membrane irritation or accidental extubation.
          </p>
          <h5>Trach Collar Placement : </h5>
          <p>
            Replace the trach collar over the tracheostomy and securely snap it
            into place.
          </p>
          <h5>Vital Sign Check : </h5>
          <p>
            Press the button on the monitor to cycle through blood pressure and
            vitals monitoring.
          </p>
          <h5>Breath Sounds Assessment : </h5>
          <p>
            Re-auscultate breath sounds over both the upper and lower, as well
            as the left and right sides of the patient's chest, following the
            same sequence: right upper to left upper, then right lower to left
            lower chest.
          </p>
          <h5>Documentation : </h5>
          <p>
            Conclude the procedure by meticulously documenting all relevant
            details in the tablet, ensuring comprehensive record-keeping.
          </p>
        </div>
        <div className="vrone_c_six">
          <h3>Lesson - 4 - Closed Suctioning : </h3>
          <p>
            Patients in critical care who have a tracheostomy tube may need a
            constant flow of oxygen. Maintaining effective breathing and
            preventing blockages both depend on suctioning. The closed
            suctioning method is applied in such a situation. In this module,
            students will practice using an in-line catheter for suctioning. In
            order to adapt, learners will connect the ventilator and in-line
            catheter, maintaining the oxygen supply while also carrying out
            suctioning. Complete and efficient practice in the procedure is
            provided by adequate affordance in conjunction with comprehensive
            instruction.
          </p>
          <h5>Introduction and Verification : </h5>
          <p>
            Commence the procedure by introducing yourself to the patient and
            confirming their identity. Informed consent for suctioning the
            patient's tracheostomy should be obtained from the patient.
          </p>
          <h5>Hand Sanitization : </h5>
          <p>
            Prior to any procedure, ensure hand hygiene by thoroughly cleaning
            your hands with hand sanitizer to minimize the risk of
            contamination.
          </p>
          <h5>Vital Sign Check : </h5>
          <p>
            Utilize the monitor to check the patient's blood pressure, heart
            rate, respiratory rate, and O2 saturation. Press the button on the
            monitor to cycle through blood pressure measurements.
          </p>
          <h5>Breath Sounds Assessment : </h5>
          <p>
            With a stethoscope, auscultate breath sounds over both the upper and
            lower, as well as the left and right sides of the patient's chest.
            Listen in the following sequence: right upper to left upper, then
            right lower to left lower chest.
          </p>
          <h5>Hand Sanitization : </h5>
          <p>
            Reiterate hand hygiene by cleaning your hands with hand sanitizer.
          </p>
          <h5>Patient Explanation : </h5>
          <p>
            Make sure the patient is completely informed and at ease with the
            impending procedure of attaching a catheter to the tracheostomy and
            suctioning out all the secretion to help breathe easier.
          </p>
          <h5>Glove Preparation : </h5>
          <p>
            Retrieve gloves from the non-sterile glove box with the respective
            hands to wear them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VrOne;
