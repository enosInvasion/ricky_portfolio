import React from "react";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import "./VrFour.css";

const VrFour = () => {
  const location = useLocation();
  const imgList = [];
  return (
    <div className="vr_four_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <a href="https://medvr.education/solution/cvc-insertion-in-vr/">
          https://medvr.education/solution/cvc-insertion-in-vr/
        </a>
        <div className="vr_four_c_one">
          <h3>About : </h3>
          <p>
            Jacob is a male patient who is 52 years old. He is admitted for an
            infection and has antibiotics ordered. There have been multiple
            attempts at placing IV access, but to no avail. An order for the
            implantation of a central venous catheter has been written by the
            attending physician. The internal jugular vein must be the site of
            the central line insertion using the ultrasound-guided technique.{" "}
          </p>
          <p>
            In a virtual setting, learners will practice inserting a central
            venous catheter, covering all the steps from setting up a sterile
            field to finishing the insertion process.{" "}
          </p>
          <p>
            The goal of this multiplayer virtual reality session is to give
            students the instruction and practice they need to perform the
            procedure confidently and efficiently.
          </p>
        </div>
        <div className="vr_four_c_two">
          <h3>Features : </h3>
          <p>
            There are two sections to this module. One is the learning phase,
            where a user interface (UI) will display the tasks that currently
            need to be completed along with highlight markers. No task user
            interface (UI) or highlight markers will be displayed in the other
            mode, called assessment mode. For a student to successfully complete
            the assessment phase, the learning phase must be completed. When in
            assessment mode, students will see their progress on a user
            interface
          </p>
          <p>
            (UI) and have three opportunities to make mistakes during each
            session. If they make a mistake, the user interface will display the
            correct task. If they run out of opportunities, they must start over
            from scratch.
          </p>
          <p>
            Additionally, this module offers a multiplayer session where
            multiple students can participate and complete the learning and
            assessment tasks together. Physics is activated on every item that
            is picked up, enabling students to pass them to other students or to
            grab and drop them. It also has a menu for selecting levels, logging
            in, and adjusting the speed of the VR simulation.
          </p>
        </div>
        <div className="vr_four_c_three">
          <h3>Lesson - 1 : </h3>
          <p>
            Students must practice getting ready for a central line insertion
            procedure in this first module. This include setting up the sterile
            field, making sure all necessary equipment is available, and getting
            the patient ready for the surgery. The learners are provided with
            the affordances they need to navigate the module without any bumps.
            Making sure you are well-prepared will help you complete the process
            quickly.
          </p>
        </div>
        <div className="vr_four_c_four">
          <h3>Introduction : </h3>
          <p>
            This procedure outlines the steps for inserting a central venous
            catheter with the use of ultrasound guidance. It is essential to
            maintain strict aseptic technique throughout the procedure to
            minimize the risk of infection.
          </p>
          <h3>Equipment and Materials : </h3>
          <ol>
            <li>Central venous catheter insertion kit</li>
            <li>Ultrasound machine with probe</li>
            <li>Lidocaine syringe</li>
            <li>Normal saline (NS) syringe</li>
            <li>Sterile drapes</li>
            <li>ChloraPrep or other antiseptic solution</li>
            <li>Sterile gloves and gown</li>
            <li>Bed with adjustable height</li>
            <li>Remote control</li>
            <li>Trendelenburg position</li>
          </ol>
        </div>
        <div className="vr_four_c_five">
          <h3>Procedure : </h3>
          <ol>
            <li>
              Ensure that all necessary equipment and supplies are readily
              available and confirm their integrity before proceeding.
            </li>
            <li>
              Begin by using the remote control to adjust the height of the bed
              to a comfortable working level.
            </li>
            <li>
              Don personal protective equipment (PPE), including sterile gloves
              and a gown, to maintain a sterile field.
            </li>
            <li>
              With sterile gloves on, grab the ultrasound (USG) probe and power
              on the ultrasound machine.
            </li>
            <li>
              Scan the patient's neck area using the USG probe to locate the
              carotid artery. Identify the optimal insertion site for the
              central venous catheter.
            </li>
            <li>
              Open the procedure pack, ensuring aseptic technique, and place its
              contents on a clean and sterile surface.
            </li>
            <li>
              Grab the sterile drape and carefully place it over the patient,
              creating a sterile barrier to protect the field.
            </li>
            <li>
              Pick up the lidocaine syringe and administer local anesthesia at
              the selected insertion site to minimize patient discomfort.
            </li>
            <li>
              Take the Normal Saline (NS) syringe packet into the highlighted
              area on your sterile field.
            </li>
            <li>
              Open the cover of the NS syringe packet using aseptic technique.
            </li>
            <li>
              Dispose of the NS syringe packet into a designated container for
              biohazardous waste.
            </li>
            <li>
              Proceed to open the central venous catheter insertion kit cover,
              ensuring the sterility of the contents.
            </li>
            <li>
              Verify and confirm that all necessary supplies within the kit are
              present and accounted for.
            </li>
            <li>
              Pick up the ChloraPrep or chosen antiseptic solution and
              thoroughly scrub the patient's neck within the sterile field,
              following the manufacturer's instructions.
            </li>
            <li>
              Hold the central venous catheter in one hand and the flush syringe
              in the other. Use the flush syringe to flush all three lumens of
              the catheter with normal saline, ensuring no air bubbles are
              present.
            </li>
            <li>Retrieve the USG probe and place it on the sterile field.</li>
            <li>
              Cover the USG probe with the provided cover to maintain its
              sterility.
            </li>
            <li>
              Place the USG probe back in the highlighted area on the sterile
              field.
            </li>
          </ol>
        </div>
        <div className="vr_four_c_five">
          <h3>Lesson - 2 : </h3>
          <p>
            This module teaches students how to perform the insertion procedure,
            which includes things like threading the catheter over the guide
            wire, inserting the introducer needle, and applying dressing after
            the insertion. In order to verify catheter placement, the learner
            will order an x-ray as the task comes to a close. With all required
            affordances at their disposal, students can practice in authentic
            situations for real-world experiences.
          </p>
        </div>
        <div className="vr_four_c_six">
          <h4>Introduction : </h4>
          <p>
            This procedure section details the steps following the initial setup
            to complete the insertion of a central venous catheter with the use
            of ultrasound guidance.
          </p>
          <h4>Equipment and Materials : </h4>
          <ol>
            <li>Central venous catheter insertion kit</li>
            <li>Ultrasound machine with probe</li>
            <li>Lidocaine syringe</li>
            <li>Normal saline (NS) syringe</li>
            <li>Sterile drapes</li>
            <li>ChloraPrep or other antiseptic solution</li>
            <li>Sterile gloves and gown</li>
            <li>Bed with adjustable height</li>
            <li>Remote control</li>
            <li>Trendelenburg position</li>
            <li>Guidewire</li>
            <li>Introducer needle</li>
            <li>Scalpel</li>
            <li>Dilator</li>
            <li>Catheter</li>
            <li>Gauze</li>
            <li>Biopatch</li>
            <li>Dressing</li>
            <li>i-Pad for X-ray ordering</li>
          </ol>
        </div>
        <div>
          <h4>Procedure : </h4>
          <ol>
            <li>
              With one hand, hold the ultrasound (USG) probe and with the other
              hand, hold the introducer needle.
            </li>
            <li>
              Place the USG probe at the previously identified insertion site
              and carefully insert the introducer needle under ultrasound
              guidance.
            </li>
            <li>
              After successful placement of the introducer needle, remove the
              syringe and USG probe from the sterile field and place them back
              on the designated table.
            </li>
            <li>Take the guidewire and position it at the insertion site.</li>
            <li>
              Activate the trigger button on the introducer needle and continue
              to insert the guidewire. Once the guidewire is in place, remove it
              and place it on the table.
            </li>
            <li>Remove the introducer needle and place it on the table.</li>
            <li>
              Take the scalpel and perform a skin incision (nick) at the
              insertion site. Once completed, return the scalpel to the table.
            </li>
            <li>
              Now, take the dilator and insert it into the incision. After
              dilation, remove it and place it back on the table.
            </li>
            <li>
              With the catheter in one hand and the guidewire in the other,
              carefully slide the guidewire into the catheter.
            </li>
            <li>
              Holding the guidewire at the end of the catheter, continue
              inserting it into the vein. Once it's in place, remove the
              guidewire and place it on the table.
            </li>
            <li>
              Take a piece of gauze and gently wipe the insertion site to remove
              any excess blood or fluids. Discard the gauze in the designated
              waste bin.
            </li>
            <li>
              Place the biopatch at the insertion site to help prevent
              infection.
            </li>
            <li>
              Next, take the dressing and position it over the biopatch to
              secure the catheter in place.
            </li>
            <li>
              Retrieve the i-Pad and order an X-ray to confirm the terminal tip
              placement of the catheter, ensuring it's correctly positioned in
              the desired location.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VrFour;
