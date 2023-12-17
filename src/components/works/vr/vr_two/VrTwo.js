import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import "./VrTwo.css";

const VrTwo = () => {
  const location = useLocation();
  const imgList = [];

  return (
    <div className="vrtwo_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <a href="https://medvr.education/solution/head-to-toe-assessment/">
          https://medvr.education/solution/head-to-toe-assessment/
        </a>
        <div className="vrtwo_c_one">
          <h4>About : </h4>
          <p>
            This 42-year-old corporate executive is Mike, and he is undergoing
            an outpatient surgical procedure. The outpatient surgery nurse is
            required to conduct a head-to-toe assessment prior to the procedure.
          </p>
          <p>
            Although the process is quite straightforward in and of itself, it
            does call for sufficient training, experience, and a sharp eye for
            detail that comes from extensive practice. The VR simulations
            offered by MedVR Education are intended to assist students in honing
            their skills so they can carry out the procedure competently.{" "}
          </p>
          <p>
            With the voice-chat feature of this multiplayer VR simulation,
            students from various locations can come together and communicate in
            a shared virtual environment. They collaborate and exchange
            knowledge and experiences.
          </p>
        </div>
        <div className="vttwo_c_two">
          <h4>Features :</h4>
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
            grab and drop them. It also has a menu for selecting levels, logging
            in, and adjusting the speed of the VR simulation.
          </p>
          <h4>Lesson 1 : </h4>
          <p>
            A patient's Glasgow Coma Scale is used to determine their level of
            consciousness. However, the necessary information must be obtained
            and the patient's identity verified before the procedure can begin.
            Every affordance needed for a seamless procedure execution is
            provided. The patient is evaluated using a predetermined, sequential
            examination procedure that includes testing their motor skills,
            reflexes, and eye movement. The program offers continuous support
            throughout the training session, assisting students at each stage
            and motivating them to finish the entire process.
          </p>
          <h4>Procedure : </h4>
          <h5>Introduction and Verification : </h5>
          <p>
            Begin by introducing yourself to the patient and verifying their
            identity. Inform the patient that the procedure involves an
            assessment of their neurological functions, focusing on the
            evaluation of eyes and visual fields, motor function of the arms and
            legs, and touch sensation.
          </p>
          <h5>Privacy Measures : </h5>
          <p>
            Ensure the patient's privacy by closing the door to the examination
            room or area.
          </p>
          <h5>Assessment of Level of Consciousness : </h5>
          <p>
            Assess the patient's level of consciousness using standard methods,
            such as the Glasgow Coma Scale. Begin by measuring the patient's
            verbal response, which may include asking questions about their name
            and location and requesting that they stick out their tongue.
          </p>
          <h5>Examination of Pupils and Eye Movement : </h5>
          <p>
            Start by examining the pupils and eye movement. Ask the patient to
            open and close their eyes. Dim the room lighting slightly to create
            a conducive environment. Using a penlight, instruct the patient to
            look over your shoulder at the wall behind you. Shine the light into
            the patient's eyes, first in the left eye and then in the right eye.
            Observe the response of the pupils, looking for constriction to
            approximately 2mm. Once completed, turn the room lights back on.
          </p>
          <h5>Visual Field Examination : </h5>
          <p>
            Stand directly in front of the patient and hold up a finger. Move
            your finger in various directions, from left to right and up and
            down. Ask the patient to follow your finger's movement without
            moving their head.
          </p>
          <h5>Assessment of Peripheral Vision : </h5>
          <p>
            Position a pencil behind the patient's ear just to the right of
            their shoulder in an up-and-down position. Gradually bring the
            pencil forward toward the patient until they indicate that they can
            see it. Repeat the procedure on the left side.
          </p>
          <h5>Touch Sensation Evaluation : </h5>
          <p>
            Using a cotton ball, tear a wisp of it and hold it between your
            index finger and thumb. Gently touch the patient's left eye with the
            wisp, observing their blink response. Repeat the same procedure for
            the right eye.
          </p>
          <h5>Motor Function Assessment : </h5>
          <p>
            Place both your left and right index and middle fingers into the
            patient's hands. Ask the patient to squeeze your fingers as hard as
            they can.
          </p>
          <h5>Motor Function of Arms : </h5>
          <p>
            Request the patient to extend their arms at the elbow in front of
            them with their palms facing upward. Instruct the patient to close
            their eyes during this part of the examination.
          </p>
          <h5>Motor Function of Legs : </h5>
          <p>
            Ask the patient to raise their left leg while gently pressing
            downward on the raised leg. Repeat the same procedure with the right
            leg.
          </p>
          <h5>Reflex Testing : </h5>
          <p>
            Finally, assess the patient's reflexes. Take the penlight and strike
            the lateral part of the sole of both the right and left foot,
            observing the reflex responses.
          </p>
        </div>
        <div className="vrtwo_c_three">
          <h4>Lesson - 2 : </h4>
          <p>
            Using cotton swabs to touch and pierce specific body parts with a
            sharp or dull needle are two methods used to evaluate sensory
            functions. The goal of the course is to assist students in
            practicing each step in a predetermined order. Throughout the
            training session, learners are given regular prompts and guidance to
            help them finish all the steps.
          </p>
          <h4>Procedure : </h4>
          <h5>Introduction and Consent : </h5>
          <p>
            Begin by explaining the procedure to the patient. Inform them that
            you will be touching different parts of their body with objects of
            varying textures, and you would like them to identify whether the
            sensation is sharp or dull and specify the location.
          </p>
          <h5>Patient Preparation : </h5>
          <p>
            Ask the patient to close their eyes to ensure that their responses
            are solely based on the sensations they feel.
          </p>
          <h5>Testing with Sharp and Dull Objects : </h5>
          <ol>
            <li>
              Use a safety pin with a sharp point to prick the patient's left
              shoulder. Prompt the patient to describe the sensation and specify
              the location.
            </li>
            <li>
              Utilize an object with a dull point to prick the patient's left
              inner forearm. Again, request that the patient identify the
              sensation and location.
            </li>
            <li>
              Repeat the procedure with the dull point on the patient's left
              outer forearm and the sharp point on their left thumb and fingers.
            </li>
            <li>
              Continue by pricking the patient's right shoulder with the dull
              point and the right inner forearm with the sharp point.
            </li>
            <li>
              Repeat the procedure with the dull point on the right outer
              forearm and the sharp point on the right thumb and fingers.
            </li>
            <li>
              Prick the front of both of the patient's thighs with the dull
              point and ask for their response.
            </li>
          </ol>
          <h5>Position Change : </h5>
          <p>Request the patient to turn onto their left side.</p>
          <h5>Testing on the sides of the calves : </h5>
          <ol>
            <li>
              Prick the right side of the patient's left calf and the left side
              of their right calf with the sharp point. Ask the patient to
              identify the sensation.
            </li>
            <li>
              Continue by pricking the left side of the left calf and the right
              side of the right calf with the dull point. Prompt the patient to
              describe the sensation.
            </li>
          </ol>
          <h5>Testing on Buttocks : </h5>
          <p>
            While the patient is still on their left side, inform them that the
            test is nearly complete and ask if they feel anything when pricked
            on the inside of both buttocks with the dull point. The patient
            should specify the location and sensation.
          </p>
          <h5>Position Return : </h5>
          <p>Ask the patient to return to laying on their back.</p>\
          <h5>Final testing on toes : </h5>
          <p>
            Prick the toes on the patient's left foot with the sharp point.
            Request that the patient identify the sensation.
          </p>
          <p>
            Follow by pricking the toes on the right foot with the dull point.
            Prompt the patient to describe the sensation.
          </p>
          <h5>Completion of the Test : </h5>
          <p>
            Inform the patient that the test is now complete and thank them for
            their cooperation and participation.
          </p>
          <h5>Patient Feedback : </h5>
          <p>
            Before concluding, you may ask the patient if they have any
            additional comments or questions regarding the test.
          </p>
        </div>
        <div className="vrtwo_c_four">
          <h4>Lesson 3 : </h4>
          <p>
            This module assesses the virtual patient's proprioception—the
            ability to perceive one's own body position—and vibration sense.
            Paper clips and tuning forks are among the conveniences offered to
            aid the user in finishing the tasks. Throughout the session, the
            user is guided by consistent instructions, which also motivate
            students to finish the entire procedure.
          </p>
          <h4>Procedure : </h4>
          <h5>Introduction and Explanation : </h5>
          <p>
            Begin by informing the patient about the upcoming tests for sensing
            vibrations, proprioception, stereognosis, and tactile localization.
            Ensure that the patient is aware that their eyes should remain
            closed during the tests.
          </p>
          <h5>Testing Vibrations : </h5>
          <ol>
            <li>Hold the tuning fork by the stem-end with your right hand.</li>
            <li>
              Tap the prong end against the palm of your left hand to initiate
              vibrations.
            </li>
            <li>
              Gently touch the foot end of the tuning fork to the patient's
              right distal interphalangeal joint of the index finger.
            </li>
            <li>
              Ask the patient to indicate when they no longer sense the
              vibrations.
            </li>
            <li>
              After a response, repeat the process by tapping the tuning fork
              and touching it to the patient's right big toe.
            </li>
            <li>
              Again, ask the patient to identify when the vibrations cease.
            </li>
          </ol>
          <h5>Testing Proprioception : </h5>
          <ol>
            <li>
              Explain proprioception as the awareness of body position and
              movement.
            </li>
            <li>
              Gently grasp the patient's right big toe between your right index
              finger and thumb.
            </li>
            <li>
              Move the toe upward, then downward, all while the patient's eyes
              remain closed.
            </li>
            <li>
              Ask the patient to indicate the direction of the toe's movement.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VrTwo;
