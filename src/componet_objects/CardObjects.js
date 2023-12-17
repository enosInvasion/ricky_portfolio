import DevelopmentProjectsImage from "../images/development.jpg";
import BoardGamesImage from "../images/board_games.jpg";
import VRProjectsImage from "../images/vr_projects.jpg";
import DesignProjectsImage from "../images/design_projects.jpg";
import des_1 from "../images/design/design_1.png";
import des_2 from "../images/design/design_2.png";
import des_3 from "../images/design/design_3.png";
import des_4 from "../images/design/design_4.png";
import des_5 from "../images/design/design_5.png";
import des_6 from "../images/design/design_6.png";
import des_7 from "../images/design/design_7.png";
import des_8 from "../images/design/design_8.png";
import des_9 from "../images/design/design_9.png";
import des_10 from "../images/design/design_10.png";
import des_11 from "../images/design/design_11.png";
import des_12 from "../images/design/design_12.jpg";
import des_13 from "../images/design/design_13.png";
import des_14 from "../images/design/design_14.jpg";
import des_15 from "../images/design/design_15.png";
import des_16 from "../images/design/design_16.jpg";
import des_17 from "../images/design/design_17.png";
import prot_1 from "../images/prototype/Prototype/1_1.png";
import prot_2 from "../images/prototype/Prototype/2_8.png";
import prot_3 from "../images/prototype/Prototype/3_7.png";
import prot_4 from "../images/prototype/Prototype/4_1.png";
import bgone from "../images/bg_one.png";
import col_rush from "../images/bottom_carousal/Colrush_1.jpg";
import DevOne from "../images/dev_one/Level/1_3.png";
import DevTwo from "../images/dev_two/Levels/2_1.png";
import DevThree from "../images/dev_three/Level/3L_2.png";
import meetingOne from "../images/bottom_carousal/TheMeeting_1.jpg";
import mShapesThree from "../images/bottom_carousal/MediaShapes_3.jpg";
import trach from "../images/Trach-L3.jpg";
import htt from "../images/HTT-L1.jpg";
import pph from "../images/PPH-main.jpg";
import cvc from "../images/CVC-L1.jpg";
import sb_1 from "../images/bottom_carousal/sb_1.jpg";
import trip_down from "../images/trip_down.jpg";

const main_card_object_list = [
  {
    id: "dev_3",
    title: "AMAZE - A Third Person Adventure",
    image_src: DevThree,
    project_title: "AMAZE - A Third Person Adventure",
    created_at: "04/03/2022",
    project_type: "Development",
    project_description:
      "AMAZE is an enthralling and thought-provoking video game that immerses players in the shoes of an archaeology student on an intriguing quest.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "dev_1",
    title: "Tiretio - A First Person Shooter",
    image_src: DevOne,
    project_title: "Tiretio - A First Person Shooter",
    created_at: "04/03/2022",
    project_type: "Development",
    project_description:
      "My main objective is to create a captivating first-person shooting game to showcase my expertise in game development.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "prot_3",
    title: "THE CHRONICLES OF AMUSOR",
    image_src: prot_3,
    project_title: "THE CHRONICLES OF AMUSOR",
    created_at: "04/03/2022",
    project_type: "Prototype",
    project_description:
      "The theme of the challenge that led to the creation of this title is Haunted House. Sincerely, not every member of the team was aware of this",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "board2",
    title: "Serious Business",
    image_src: sb_1,
    project_title: "Serious Business",
    created_at: "04/03/2022",
    project_type: "Board Games",
    project_description:
      "Our instructions were to create a new game using ‘Sissy Fight’ as a starting point, with a requirement that we maintain the aspect of simultaneously revealed action cards for our final game. ",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "vr_1",
    title: "Tracheostomy Care",
    image_src: trach,
    project_title: "Tracheostomy Care",
    created_at: "04/03/2022",
    project_type: "Virtual Reality",
    project_description: `A tracheostomy procedure was necessary for Patrick, 57, because of an infection in his epiglottis. It is your duty as a nurse to carry out post-operative tracheostomy care procedures. 
    The tracheostomy procedure is a major surgical procedure that entails a significant risk of complications.`,
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "vr_2",
    title: "Head to Toe Assessment",
    image_src: htt,
    project_title: "Head to Toe Assessment",
    created_at: "04/03/2022",
    project_type: "Virtual Reality",
    project_description:
      "This 42-year-old corporate executive is Mike, and he is undergoing an outpatient surgical procedure. The outpatient surgery nurse is required to conduct a head-to-toe assessment prior to the procedure.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
];

let design_card_object_list = [
  {
    id: "design_1",
    title: "main card",
    image_src: des_1,
    project_title: "Low Poly Chess",
    created_at: "15/04/2020",
    project_type: "Low Poly Modeling",
    project_description:
      "A blender-textured, 3D low-poly chess set asset for games of chess that was created using cylinder extrusion.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_2",
    title: "main card",
    image_src: des_2,
    project_title: "Church Interior",
    created_at: "25/05/2020",
    project_type: "Interior Design",
    project_description:
      "Blender-created modern church interior using fundamental architectural principles. During texturing, a UV map is implemented.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_3",
    title: "main card",
    image_src: des_3,
    project_title: "Furry Rabbit",
    created_at: "18/06/2020",
    project_type: "Object Modeling",
    project_description:
      "On a sunny day, a furry rabbit can be seen in the grass. Fur on the rabbit were created in the blender using skin texturing.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_4",
    title: "main card",
    image_src: des_4,
    project_title: "Goliath",
    created_at: "05/08/2020",
    project_type: "Sculpturing",
    project_description:
      "Goliath enemy model at a low level. This character was created by applying Blender's 3D sculpting principles.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_5",
    title: "main card",
    image_src: des_5,
    project_title: "Iron-Man Helmet",
    created_at: "01/10/2020",
    project_type: "Sculpturing",
    project_description:
      "Favorite superhero helmet created in a blender using only one plane for extrusion.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_6",
    title: "main card",
    image_src: des_6,
    project_title: "Medival Ruins",
    created_at: "05/11/2020",
    project_type: "Enviornment Design",
    project_description:
      "A portion of medieval ruin sites close to a body of water. For the wall's texturing, a custom material was made in Blender using various maps",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_7,
    project_title: "Farm House",
    created_at: "10/12/2020",
    project_type: "Enviornment Design",
    project_description:
      "In the middle of nowhere, a farmhouse. To texture the house and the leaves, tree and specially made materials were used.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "Medival Ruins",
    image_src: des_8,
    project_title: "Medival Castle",
    created_at: "13/01/2021",
    project_type: "Enviornment Design",
    project_description:
      "Water surrounds a medieval castle to keep enemies away. In blender, high poly models are made and textured.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_9,
    project_title: "Flame Saber",
    created_at: "25/02/2021",
    project_type: "Stimulation Design",
    project_description:
      "Instead of a light saber, it is a flame saber. Blender flame simulation was used to ignite the saber's cylinder.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_10,
    project_title: "Sci-fi Crate-1",
    created_at: "05/03/2021",
    project_type: "Sci-fi Design",
    project_description:
      "A cube was transformed into a sci-fi crate using boolean operations and beveling. To improve the model's lighting, post-processing in Blender and Photoshop is used.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_11,
    project_title: "Randal",
    created_at: "10/04/2021",
    project_type: "Sci-fi Design",
    project_description:
      "A futuristic gun built using a regular gun as a base. Using Substance Painter for texturing and Blender for modeling.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_12,
    project_title: "Oxi-Bot",
    created_at: "12/05/2021",
    project_type: "Sci-fi Design",
    project_description:
      "An armored robot by the name of Oxi-Bot was created in Blender, with textures added in Substance Painter and effects added in Photoshop.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_13,
    project_title: "BMR",
    created_at: "28/05/2021",
    project_type: "Vehicle Design",
    project_description:
      "A military truck BMR was created in Blender using four reference images and the vehicle model principle. Each component was then UV-wrapped and textured in Substance Painter.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_14,
    project_title: "The Cursher",
    created_at: "01/07/2021",
    project_type: "Vehicle Design",
    project_description:
      "A Substance Painter-textured, futuristic military tank created in Blender. Made without utilizing any reference images.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_15,
    project_title: "Sci-fi Spaceship",
    created_at: "10/08/2021",
    project_type: "Sci-fi Design",
    project_description:
      "With the aid of boolean cutting and beveling, a modular sci-fi spaceship was created out of three large cubes.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_16,
    project_title: "Scorpion",
    created_at: "13/10/2021",
    project_type: "Sci-fi Design",
    project_description:
      "The Scorpion is an advanced, futuristic sniper rifle. Beveling and 3D boolean cutting were used to define the gun. created in Blender.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "design_7",
    title: "main card",
    image_src: des_17,
    project_title: "BatMobile",
    created_at: "05/11/2021",
    project_type: "Vehicle Design",
    project_description:
      "Using the principles of vehicle modeling, an old Batmobile model was created in Blender. UV maps with seams were unwrapped and then texturized in Blender.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
];

const development_card_object_list = [
  {
    id: "dev_1",
    title: "Tiretio - A First Person Shooter",
    image_src: DevOne,
    project_title: "Tiretio - A First Person Shooter",
    created_at: "04/03/2022",
    project_type: "Development",
    project_description:
      "My main objective is to create a captivating first-person shooting game to showcase my expertise in game development.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "dev_2",
    title: "Pacman - An Arcade Classic",
    image_src: DevTwo,
    project_title: "Pacman - An Arcade Classic",
    created_at: "04/03/2022",
    project_type: "Development",
    project_description:
      "My objective for my second game in my indie game development journey was to pay homage to the classic arcade game Pac-Man while infusing it with a fresh and modern twist.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "dev_3",
    title: "AMAZE - A Third Person Adventure",
    image_src: DevThree,
    project_title: "AMAZE - A Third Person Adventure",
    created_at: "04/03/2022",
    project_type: "Development",
    project_description:
      "AMAZE is an enthralling and thought-provoking video game that immerses players in the shoes of an archaeology student on an intriguing quest.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
];

const prototype_card_object_list = [
  {
    id: "prot_1",
    title: "LEVEL G41 - A LIVE ACTION ROLE PLAY",
    image_src: prot_1,
    project_title: "LEVEL G41 - A LIVE ACTION ROLE PLAY",
    created_at: "04/03/2022",
    project_type: "Prototype",
    project_description:
      "The game is played over Zoom via voice controls and is set in the G41 room at campus.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "prot_2",
    title: "MUR’S JOURNEY",
    image_src: prot_2,
    project_title: "MUR’S JOURNEY",
    created_at: "04/03/2022",
    project_type: "Prototype",
    project_description:
      "The Mur’s journey concept came during our brainstorming section. We decided to create a game where two players are lost in time after messing with an artefact in a museum.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "prot_3",
    title: "THE CHRONICLES OF AMUSOR",
    image_src: prot_3,
    project_title: "THE CHRONICLES OF AMUSOR",
    created_at: "04/03/2022",
    project_type: "Prototype",
    project_description:
      "The theme of the challenge that led to the creation of this title is Haunted House. Sincerely, not every member of the team was aware of this",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "prot_4",
    title: "FREDRICK THE FIREFIGHTER",
    image_src: prot_4,
    project_title: "FREDRICK THE FIREFIGHTER",
    created_at: "04/03/2022",
    project_type: "Prototype",
    project_description: `Fredrick the FireFighter is a game in the puzzle-survival genre. The player takes control
      of “Fredrick”, an experienced firefighter with a tragic past, specialized in extracting
      civilians from flaming buildings.`,
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
];

const board_games_card_object_list = [
  {
    id: "board1",
    title: "Startics",
    image_src: bgone,
    project_title: "Startics",
    created_at: "04/03/2022",
    project_type: "Baord Games",
    project_description:
      "The game is inspired by politics and how, in a democratic system, agents can influence the state of affairs in their environment through voting and negotiation.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "board2",
    title: "Serious Business",
    image_src: sb_1,
    project_title: "Serious Business",
    created_at: "04/03/2022",
    project_type: "Board Games",
    project_description:
      "Our instructions were to create a new game using ‘Sissy Fight’ as a starting point, with a requirement that we maintain the aspect of simultaneously revealed action cards for our final game. ",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "board3",
    title: "Colrush",
    image_src: col_rush,
    project_title: "Colrush",
    created_at: "04/03/2022",
    project_type: "Board Games",
    project_description:
      "The Colrush game is a 3 player game; 2 players play as colonizers, and 1 player plays as the Governor.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "board4",
    title: "The Meeting",
    image_src: meetingOne,
    project_title: "The Meeting",
    created_at: "04/03/2022",
    project_type: "Board Games",
    project_description:
      "My teammates and I were given the immediate task of creating a game that addressed either racism or colonialism.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "board5",
    title: "Media Shapes",
    image_src: mShapesThree,
    project_title: "Media Shapes",
    created_at: "04/03/2022",
    project_type: "Board Games",
    project_description:
      "The seemingly unfair pattern of representation in media, as observed by Katha Pollitt1 named the Smurfette principle, defined as the practice in media, such as film and television, to include only one woman in an otherwise entirely male ensemble",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "board6",
    title: "A TRIP DOWN MEMORY LANE",
    image_src: trip_down,
    project_title: "A TRIP DOWN MEMORY LANE",
    created_at: "04/03/2022",
    project_type: "Board Games",
    project_description:
      "We decided to tackle the theme of ‘appreciation’ in our game. We interpret this as appreciation connected to the story of The Hunter and The Fox Woman, and the lack of appreciation for the things we have, as well as the sorrow caused by the loss of those things. ",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
];

const vr_card_object_list = [
  {
    id: "vr_1",
    title: "Tracheostomy Care",
    image_src: trach,
    project_title: "Tracheostomy Care",
    created_at: "04/03/2022",
    project_type: "Virtual Reality",
    project_description: `A tracheostomy procedure was necessary for Patrick, 57, because of an infection in his epiglottis. It is your duty as a nurse to carry out post-operative tracheostomy care procedures. 
    The tracheostomy procedure is a major surgical procedure that entails a significant risk of complications.`,
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "vr_2",
    title: "Head to Toe Assessment",
    image_src: htt,
    project_title: "Head to Toe Assessment",
    created_at: "04/03/2022",
    project_type: "Virtual Reality",
    project_description:
      "This 42-year-old corporate executive is Mike, and he is undergoing an outpatient surgical procedure. The outpatient surgery nurse is required to conduct a head-to-toe assessment prior to the procedure.",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "vr_3",
    title: "Post-Partum Heamorage",
    image_src: pph,
    project_title: "Post-Partum Heamorage",
    created_at: "04/03/2022",
    project_type: "Virtual Reality",
    project_description:
      "Postpartum hemorrhage, also known as PPH, is a serious vaginal bleeding that can become life-threatening if it is not recognized and treated promptly after childbirth",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
  {
    id: "vr_4",
    title: "CVC",
    image_src: cvc,
    project_title: "CVC",
    created_at: "04/03/2022",
    project_type: "Virtual Reality",
    project_description:
      "Jacob is a male patient who is 52 years old. He is admitted for an infection and has antibiotics ordered. There have been multiple attempts at placing IV access, but to no avail. An order for the implantation of a central venous catheter has been written by the attending physician",
    carousal_imageList: [VRProjectsImage, DesignProjectsImage, BoardGamesImage],
  },
];

export {
  main_card_object_list,
  design_card_object_list,
  development_card_object_list,
  prototype_card_object_list,
  board_games_card_object_list,
  vr_card_object_list,
};
