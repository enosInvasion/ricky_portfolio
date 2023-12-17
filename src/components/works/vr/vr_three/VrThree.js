import React from "react";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import "./VrThree.css";

const VrThree = () => {
  const location = useLocation();
  const imgList = [];
  return (
    <div className="vrthree_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <a href="https://medvr.education/solution/postpartum-hemorrhage/">
          https://medvr.education/solution/postpartum-hemorrhage/
        </a>
        <div className="vrthree_c_one">
          <h3>About : </h3>
          <p>
            Postpartum hemorrhage, also known as PPH, is a serious vaginal
            bleeding that can become life-threatening if it is not recognized
            and treated promptly after childbirth. It is essential for
            healthcare team members to be knowledgeable about identifying the
            situation and promptly calling for assistance in order to avoid such
            unfortunate events. Timely administration of treatment is crucial to
            managing bleeding and preserving lives and families.
          </p>
          <p>
            This multi-user virtual reality simulation makes it easier for teams
            to work together and learn from different parts of the world. In
            addition to learning the skills, students also exchange real-time
            knowledge and experience via voice chat.
          </p>
          <p>
            Every stage of PPH treatment is critical and necessitates prompt
            decision-making and action, from recognizing an emergency to giving
            the right medication. This module gives students practice and
            confidence in treating PPH patients using a virtual patient. Every
            learner is given plenty of opportunity to practice and perfect the
            skills to perform with accuracy and efficiency, thereby helping them
            perform with expertise in real-life situations with appropriate
            affordances and helpful guidance.
          </p>
        </div>
        <div className="vrthree_c_two">
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
            assessment tasks together. Physics is activated on every item that
            is picked up, enabling students to pass them to other students or to
            grab and drop them. The virtual humans included in this module can
            be controlled or communicated with through natural language
            processing. It also has a menu for selecting levels, logging in, and
            adjusting the speed of the VR simulation.
          </p>
        </div>
        <div className="vrthree_c_three">
          <h3>Lesson - 1 : </h3>
          <h4>Introduction : </h4>
          <p>
            This procedure outlines the steps involved in assessing and managing
            postpartum hemorrhage in a patient, ensuring patient safety and
            communication with healthcare providers and family members.
          </p>
          <h4>Equipment and Materials : </h4>
          <ol>
            <li>Handheld device for patient history</li>
            <li>Patient call light</li>
            <li>Hand sanitizer</li>
            <li>Non-sterile gloves</li>
            <li>Remote control for bed</li>
            <li>Gown</li>
            <li>Sanitary pad</li>
            <li>Blood pressure cuff</li>
            <li>Oximeter</li>
            <li>IV pump control panel</li>
            <li>Emergency button</li>
            <li>Hemorrhage cart</li>
            <li>
              SBAR (Situation, Background, Assessment, and Recommendation)
              report for the physician
            </li>
          </ol>
          <h4>Procedure : </h4>
          <ol>
            <li>
              Begin by picking up the handheld device to review the patient's
              medical history and gather relevant information
            </li>
            <li>
              Turn off the patient's call light to ensure minimal disruption and
              privacy.
            </li>
            <li>
              Perform hand hygiene by using hand sanitizer. Rub both hands
              thoroughly to minimize the risk of infection.
            </li>
            <li>
              Don non-sterile gloves to maintain hygiene during the assessment
              and intervention.
            </li>
            <li>
              Introduce yourself to the patient, Mrs. Jones, and her family.
              Share your first name and title. Inquire about their needs and how
              you can assist them during this time.
            </li>
            <li>
              Grab the remote control and press the highlighted button to lower
              the head of the patient's bed to a comfortable position for
              assessment.
            </li>
            <li>Uncover the patient's gown as needed for the assessment.</li>
            <li>
              Request that the patient raise her legs to facilitate the
              examination.
            </li>
            <li>
              Remove the sanitary pad and place it on the bed, making sure to
              handle it properly.
            </li>
            <li>
              Touch and check the firmness of the uterine fundus. Visually
              assess for any signs of bleeding or lacerations.
            </li>
            <li>
              Explain to the patient that you will be performing a fundal
              massage to check for any blood clots that might be causing
              bleeding.
            </li>
            <li>
              Gently perform a fundal massage while monitoring for any
              abnormalities or excessive bleeding.
            </li>
            <li>
              Place the blood pressure cuff on the patient's right arm and the
              oximeter on her left-hand finger to monitor vital signs.
            </li>
            <li>
              Adjust the oxytocin infusion rate from 125ml/Hr to 250ml/Hr using
              the IV pump control panel to help manage the bleeding.
            </li>
            <li>
              In cases of ongoing bleeding and concerns, call for additional
              help by pushing the emergency button on the wall beside the
              patient's bed.
            </li>
            <li>
              Communicate with the patient's family to provide them with updates
              on the situation and answer any questions or concerns they may
              have.
            </li>
            <li>
              Inform the patient that you will continue performing the fundal
              massage to ensure the uterus remains firm.
            </li>
            <li>
              Request your assistant, Lisa, to bring the hemorrhage cart to
              measure the quantitative blood loss (QBL) and have additional
              supplies readily available
            </li>
            <li>
              Prepare an SBAR report for the physician, holding the handheld
              device in your right hand for reference. This report should
              include essential information regarding the patient's condition
              and the steps taken.
            </li>
          </ol>
        </div>
        <div className="vrthree_c_four">
          <h3>Lesson 2</h3>
          <h4>Introduction : </h4>
          <p>
            This procedure outlines the steps taken to manage and intervene in a
            case of postpartum hemorrhage, including the measurement of blood
            loss, administration of medications, and the use of medical
            equipment.
          </p>
          <h4>Equipment and Materials : </h4>
          <ol>
            <li>Weighing scale for blood-soaked items</li>
            <li>Whiteboard for data recording</li>
            <li>Medical doctor (MD)</li>
            <li>Charge nurse</li>
            <li>Assistant (Lisa)</li>
            <li>Hemorrhage cart</li>
            <li>Alcohol pad</li>
            <li>Injection</li>
            <li>Anesthesia specialist</li>
            <li>IV pump control panel</li>
            <li>Sanitary pad</li>
            <li>Foley catheter kit</li>
            <li>Foley catheter</li>
            <li>Tranexamic acid (TXA) transfusion bag</li>
            <li>Pole for hanging the TXA bag</li>
          </ol>
          <h4>Procedure : </h4>
          <ol>
            <li>
              Instruct your assistant, Lisa, to weigh the blood-soaked items to
              determine the total blood loss. Once measured, have Lisa report
              the blood loss to you.
            </li>
            <li>
              While waiting for the blood loss measurement, the charge nurse
              will record the data on a whiteboard for reference.
            </li>
            <li>
              After observing the situation, the medical doctor (MD) will speak
              to the patient about performing a bimanual uterine massage to
              assess the cause of bleeding. Confirm the cause of bleeding from
              the MD.
            </li>
            <li>
              Grab a pad from the hemorrhage cart and apply it to the patient to
              manage any ongoing bleeding.
            </li>
            <li>
              Pick up an alcohol pad from the cart and clean the injection site
              on the patient's thigh. Properly dispose of the alcohol pad in the
              designated bin once the site is clean.
            </li>
            <li>
              Take the injection from the charge nurse. Use the highlighted area
              to remove the safety cap from the injection. Administer the
              medication to the patient and dispose of the used injection
              properly.
            </li>
            <li>
              While waiting for the anesthesia specialist, prepare for the
              upcoming procedures.
            </li>
            <li>
              Increase the oxytocin infusion rate from 250ml/Hr to 500ml/Hr
              using the IV pump control panel to help manage the bleeding.
            </li>
            <li>
              Remove the sanitary pad from the patient and place it on the bed.
              Lisa should measure and report the new blood loss data, and the
              charge nurse will update the whiteboard accordingly.
            </li>
            <li>
              Apply another pad from the hemorrhage cart to manage any ongoing
              bleeding.
            </li>
            <li>
              Take the IV from the second nurse and prepare for the next step.
            </li>
            <li>
              Inform the patient that her uterus is deviating off to the left
              and her bladder is full. Explain that inserting a Foley catheter
              will help empty the bladder, potentially preventing further
              bleeding.
            </li>
            <li>
              Grab the catheter kit and place it near the patient for the
              upcoming insertion.
            </li>
            <li>
              Take out the Foley catheter and keep it near the patient's genital
              area.
            </li>
            <li>
              Grab and remove the catheter cover, ensuring aseptic technique is
              maintained.
            </li>
            <li>
              Insert the catheter by gently pushing it forward toward the
              genital area. Dispose of the kit in the designated bin.
            </li>
            <li>
              Wait for the MD and Lisa to have their discussion and for the MD
              to perform the fundal massage. Lisa will bring the tranexamic acid
              (TXA)
            </li>
            <li>
              Hang the TXA transfusion bag on the pole to prepare for
              administration.
            </li>
            <li>
              Once Lisa has weighed the pad and the MD has completed the fundal
              massage, await the final announcement from the MD regarding the
              patient's condition.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VrThree;
