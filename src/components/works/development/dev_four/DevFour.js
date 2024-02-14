import React from "react";
import "./DevFour.css";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import Footer from "../../../footer/Footer";

import inventoryOne from "../../../../images/Inventory/Inventory/1.jpg";
import inventoryTwo from "../../../../images/Inventory/Inventory/2.jpg";
import inventoryThree from "../../../../images/Inventory/Inventory/3.jpg";
import inventoryFour from "../../../../images/Inventory/Inventory/4.jpg";
import inventoryFive from "../../../../images/Inventory/Inventory/5.jpg";
import inventorySix from "../../../../images/Inventory/Inventory/6.jpg";
import inventorySeven from "../../../../images/Inventory/Inventory/7.jpg";

import dtOne from "../../../../images/Inventory/DataTables/1.jpg";
import dtTwo from "../../../../images/Inventory/DataTables/2.jpg";

import bpcInvOne from "../../../../images/Inventory/BPC_inventory/1.jpg";
import bpcInvTwo from "../../../../images/Inventory/BPC_inventory/2.jpg";
import bpcInvThree from "../../../../images/Inventory/BPC_inventory/3.jpg";
import bpcInvFour from "../../../../images/Inventory/BPC_inventory/4.jpg";
import bpcInvFive from "../../../../images/Inventory/BPC_inventory/5.jpg";

import wbpInvOne from "../../../../images/Inventory/WBP_Inventory/0.jpg";
import wbpInvTwo from "../../../../images/Inventory/WBP_Inventory/1.jpg";
import wbpInvThree from "../../../../images/Inventory/WBP_Inventory/2.jpg";
import wbpInvFour from "../../../../images/Inventory/WBP_Inventory/3.jpg";
import wbpInvFive from "../../../../images/Inventory/WBP_Inventory/4.jpg";
import wbpInvSix from "../../../../images/Inventory/WBP_Inventory/5.jpg";

import wbpHBOne from "../../../../images/Inventory/WBP_HealthBar/1.jpg";

import wbpInfoOne from "../../../../images/Inventory/WBP_Info/0.jpg";
import wbpInfoTwo from "../../../../images/Inventory/WBP_Info/1.jpg";
import wbpActionOne from "../../../../images/Inventory/WBP_Action/0.jpg";
import wbpActionTwo from "../../../../images/Inventory/WBP_Action/1.jpg";
import wbpActionThree from "../../../../images/Inventory/WBP_Action/2.jpg";
import wbpActionFour from "../../../../images/Inventory/WBP_Action/3.jpg";
import wbpActionFive from "../../../../images/Inventory/WBP_Action/4.jpg";
import wbpActionSix from "../../../../images/Inventory/WBP_Action/5.jpg";

import wbpSlotOne from "../../../../images/Inventory/WBP_Slot/0.jpg";
import wbpSlotTwo from "../../../../images/Inventory/WBP_Slot/1.jpg";
import wbpSlotThree from "../../../../images/Inventory/WBP_Slot/2.jpg";
import wbpSlotFour from "../../../../images/Inventory/WBP_Slot/3.jpg";
import wbpSlotFive from "../../../../images/Inventory/WBP_Slot/4.jpg";
import wbpSlotSix from "../../../../images/Inventory/WBP_Slot/5.jpg";
import wbpSlotSeven from "../../../../images/Inventory/WBP_Slot/6.jpg";

const DevFour = () => {
  const location = useLocation();
  const inventoryImgList = [
    inventoryOne,
    inventoryTwo,
    inventoryThree,
    inventoryFour,
    inventoryFive,
    inventorySix,
    inventorySeven,
  ];
  const dtImgList = [dtOne, dtTwo];
  const bpcInvImgList = [
    bpcInvFive,
    bpcInvFour,
    bpcInvThree,
    bpcInvTwo,
    bpcInvOne,
  ];
  const wbcInvImgList = [
    wbpInvOne,
    wbpInvTwo,
    wbpInvThree,
    wbpInvFour,
    wbpInvFive,
    wbpInvSix,
  ];
  const hbImgList = [wbpHBOne];
  const wbpInfoImgList = [wbpInfoOne, wbpInfoTwo];
  const wbpActionImgList = [
    wbpActionOne,
    wbpActionTwo,
    wbpActionThree,
    wbpActionFour,
    wbpActionFive,
    wbpActionSix,
  ];
  const wbpSlotImgList = [
    wbpSlotOne,
    wbpSlotTwo,
    wbpSlotThree,
    wbpSlotFour,
    wbpSlotFive,
    wbpSlotSix,
    wbpSlotSeven,
  ];

  return (
    <div className="dev_four_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={inventoryImgList} />
        <div>
          <h3>Role : {location.state.object.role}</h3>
          <h3>Team Members : {location.state.object.team_members}</h3>
        </div>
        <div className="dev_four_c_one">
          <h3>Objective: </h3>
          <p>
            Players of my previous project, Amaze, provided feedback to us,
            indicating that the game has a lot of potential if we keep improving
            and adding new features. First and foremost, an inventory system is
            a fundamental component of a game where players can equip various
            weapons, shields, and fruits to boost their health. It is also
            possible to add upgrades to swords and shields using various
            materials, and coins can be obtained in the inventory.
          </p>
        </div>
        <div className="dev_four_c_two">
          <h3>Inventory Overview: </h3>
          <Caraousal props={inventoryImgList} />
          <p>
            There are various components to this inventory system. The player's
            money is displayed in the top right corner, while their health is
            displayed in the top left corner. I drew inspiration for this
            inventory creation from Zelda's inventory system. There are three
            categories of collectibles: swords, shields, and consumables. Each
            element has information that can be seen by the player by hovering
            over it. When using a shield or sword, the player can equip the item
            by pressing left click twice. Similarly, when using food, the player
            can increase their health by pressing left click twice. In addition,
            right-clicking the item displays an action menu where the player can
            use consumables, equip weapons like shields and swords, and drop
            items from their inventory.
          </p>
          <p>
            The player's current 3D image can be seen in the inventory, along
            with the swords and shields they currently possess. The ability to
            drag and drop is also available to players. The player can swap out
            items, place them in a new slot, or drop them out of their inventory
            by placing them out of the slot by holding down the left mouse
            button.
          </p>
        </div>
        <div className="dev_four_c_three">
          <h2>Platforms and Engines: </h2>
          <p>
            Photoshop is used to modify images and icons, but Unreal Engine 5.3
            is used to design all of the functionality.
          </p>
          <h3>Technical Skills: </h3>
          <div className="dev_four_c_four_sub_cont_one">
            <h4>Blueprint Actors: </h4>
            <p>
              The blueprint's actor class is used to hold both money and items.
              Data tables were used to initialize both money and items. Three
              components make up the money data table: name, value, and static
              mesh. The name, description, mesh, icon, stack size, and power are
              the six components that make up the item data table. Before
              playing as the desired item and money, each actor is initialized
              by the editor.
            </p>
            <p>
              To obtain the object being dragged, another actor, who is a child
              of UMG DragDropOperations, was utilized.
            </p>
          </div>
          <div className="dev_four_c_four_sub_cont_two">
            <h4>Blueprint Component: </h4>
            <p>
              Rather than completing each blueprint inside the character
              blueprint, I kept all the blueprints related to the inventory
              inside a blueprint component called BPC_Inventory. Character
              classes will become shorter as a result, and it can also be
              readily adapted to other projects.
            </p>
          </div>
          <div className="dev_four_c_four_sub_cont_three">
            <h4>Enhanced Inputs: </h4>
            <p>
              The objects are categorized using enumeration into three groups:
              swords, shields, and food. It is utilized in a variety of widget
              blueprints to accurately determine the kind of items being used
              and the appropriate response when a particular kind of item is
              interacted with.
            </p>
          </div>
          <div className="dev_four_c_four_sub_cont_four">
            <h4>Enumeration: </h4>
            <p>
              The objects are categorized using enumeration into three groups:
              swords, shields, and food. It is utilized in a variety of widget
              blueprints to accurately determine the kind of items being used
              and the appropriate response when a particular kind of item is
              interacted with.
            </p>
          </div>
          <div className="dev_four_c_four_sub_cont_five">
            <h4>Structures: </h4>
            <p>
              To create content for the data tables, structures were employed.
              Three variables—Name, value, and mesh—that make up structural
              money will be filled in when it is used in data tables. These
              tables allow us to store multiple variables with this structure,
              which we can then utilize in the BP_Money actor. Like
              Struct_Money, Struct_Item is created for all different types of
              items. The purpose of Struct_Slots is to hold an item along with
              its type and quantity. The purpose of Struct_AllItems is to
              generate an array of items that can be used to hold items that the
              player is gathering and displaying in their inventory.
            </p>
          </div>
          <div className="dev_four_c_four_sub_cont_six">
            <h4>Widget Blueprints: </h4>
            <p>
              Since everything in this project depends on the widgets' proper
              functioning, widget blueprints are its essential components.
              WBP_Inventory, the main widget, is where all the other widget
              blueprints are stacked.
            </p>
          </div>
          <div className="dev_four_c_four_sub_cont_seven">
            <h4>3D Component Ui: </h4>
            <p>
              This feature maps the active 3D player character to a 2D image
              texture that can be used in real time inside the inventory.
            </p>
          </div>
        </div>
        <div className="dev_four_c_four">
          <h3>Challenges Faced: </h3>
          <p>
            Even with my prior Unreal Engine experience, creating an inventory
            proved to be a difficult task because many widgets needed to work in
            harmony for the process to be completed. Creating an inventory
            proved to be a challenging task due to the Unreal Engine experience,
            as numerous widgets had to cooperate in order for the process to be
            finished. More care must be given to keeping track of and passing
            along references to widgets and other items with which the player
            interacts. It was a little difficult to retrieve and set the values
            in accordance with the players' collecting and discarding because
            every item was kept inside an array that was arranged according to
            item types. Apart from that, the majority of the work is images, so
            not knowing much about Photoshop made my development process a
            little more difficult.
          </p>
        </div>
        <div className="dev_four_c_five">
          <h3>Screenshots: </h3>
          <ul>
            <li>
              <h4>DataTables: </h4>
              <Caraousal props={dtImgList} />
            </li>
            <li>
              <h4>BPC Inventory: </h4>
              <Caraousal props={bpcInvImgList} />
            </li>
            <li>
              <h4>WBP Inventory: </h4>
              <Caraousal props={wbcInvImgList} />
            </li>
            <li>
              <h4>WBP HealthBar: </h4>
              <Caraousal props={hbImgList} />
            </li>
            <li>
              <h4>WBP Info: </h4>
              <Caraousal props={wbpInfoImgList} />
            </li>
            <li>
              <h4>WBP Action: </h4>
              <Caraousal props={wbpActionImgList} />
            </li>
            <li>
              <h4>WBP Slot: </h4>
              <Caraousal props={wbpSlotImgList} />
            </li>
          </ul>
        </div>
        <div className="dev_four_c_six">
          <h3>Further Development: </h3>
          <p>
            This project is only meant to help understand how inventory
            functions, but it still needs to be integrated into a prototype or
            game. Since the player can now equip swords and shields, testing is
            necessary to ensure that the various animations match the player's
            equipped swords and shields. One of the additional things to be
            implemented in the future is upgrading weapons with different
            elements.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DevFour;
