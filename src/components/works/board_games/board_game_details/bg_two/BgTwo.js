import React from "react";
import "./BgTwo.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../navbar/Navbar";
import Caraousal from "../../../project_details/caraousal/Caraousal";
import sBussinessOne from "../../../../../images/bottom_carousal/Serious_Business_1.png";
import sBussinessTwo from "../../../../../images/bottom_carousal/Serious_Business_2.png";
import sBussinessThree from "../../../../../images/bottom_carousal/Serious_Business_3.png";
import sBussinessFour from "../../../../../images/bottom_carousal/Serious_Business_4.png";

const BgTwo = () => {
  const location = useLocation();

  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });

  const bottomImgList = [
    sBussinessOne,
    sBussinessTwo,
    sBussinessThree,
    sBussinessFour,
  ];

  return (
    <div className="bg_two_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        {/* <Caraousal props={imgList} /> */}
        <div className="objectives_and_initial_concepts_container">
          <h3>Objectives and Initial Concepts</h3>
          <p>
            Our instructions were to create a new game using ‘Sissy Fight’ as a
            starting point, with a requirement that we maintain the aspect of
            simultaneously revealed action cards for our final game.
          </p>
          <p>
            Sissy Fight was a representation of schoolyard bullying expressed as
            a kind of social competition. We were interested in exploring
            similar kinds of competitions in adult society, which brought us to
            the idea of designing a game based around ruthless competition
            between corporations. The key terms that we arrived at to describe
            our aims for this gameplay were: ruthless competition, calculated
            risks, suspicion, tensions between rational-economic and
            emotional-social motivations, and achievements - understood as
            ‘empire building’.
          </p>
          <p>
            Our early aesthetic concepts revolved around settings where we could
            explore the gray areas between capitalist competition and criminal
            action. Based on this, settings that we considered included
            competition between bootleggers in the interwar period and
            futuristic corporate dystopias.
          </p>
          <p>
            Our initial concepts for core mechanics involved the use of money to
            fulfill multiple gameplay roles, acting as both action points and
            health. We additionally wanted to focus on programs, whereby players
            could invest in each other's actions to determine their success and
            failure, as well as to personally benefit. Finally, we wanted an
            element of sabotage that would allow players to stop others’
            programs or deprive them of resources.
          </p>
        </div>
        <div className="how_to_play_container">
          <h2 className="htp_heading">How to play</h2>
          <h4 className="game_terminology">Game Terminology</h4>
          <table className="gt_table">
            <tr>
              <th>Original Term</th>
              <th>Term used for the final playtest</th>
            </tr>
            <tr>
              <td>Program</td>
              <td>Corporate Initiative</td>
            </tr>
            <tr>
              <td>Property</td>
              <td>Assets</td>
            </tr>
            <tr>
              <td>Orange Targeting Card</td>
              <td>Cheque</td>
            </tr>
            <tr>
              <td>Self-Investment</td>
              <td>Market Expansion</td>
            </tr>
            <tr>
              <td>Investment</td>
              <td>Strategic Partnership</td>
            </tr>
            <tr>
              <td>N/A</td>
              <td>Hostile Takeover</td>
            </tr>
            <tr>
              <td>Sabotage</td>
              <td>Denial of Service</td>
            </tr>
            <tr>
              <td>Defend</td>
              <td>Asset Preservation Protocol</td>
            </tr>
          </table>
        </div>
        <div className="game_pieces_container">
          <h3>Game Pieces</h3>
          <div className="each_player_has_container">
            <h4>Each player has</h4>
            <ul className="game_pieces_list">
              <li>
                <p>
                  <span>Five Targeting Tokens - </span> represented by Company
                  Logos,are assigned to each of the players in the game, e
                  including themselves
                </p>
              </li>
              <li>
                <p>
                  <span>Five Corporate Initiative Cards - </span> which can be
                  played during each round.
                </p>
              </li>
              <li>
                <p>
                  <span>Seven cheques - </span> one for each player in the game
                  including themselves, and two blank cheques to be used for
                  bluffing.
                </p>
              </li>
            </ul>
          </div>
          <div className="each_player_begins_with">
            <h4>Additionally, each player begins the game with </h4>
            <ul className="each_player_begins_with_list">
              <li>
                <p>
                  <span>6 dollars - </span> which are the currency used to fund
                  initiatives during the game.
                </p>
              </li>
              <li>
                <p>
                  <span>2 Assets - </span> which provide the player with income
                  and are used to determine the winner of the game.
                </p>
              </li>
            </ul>
          </div>
          <p className="finaly_each_player">
            Finally, a dice is used to keep count of the current round.
          </p>
        </div>
        <div className="gameplay_container">
          <h3>Gameplay</h3>
          <div className="each_round_has">
            <ul className="each_round_has_list">
              <li>
                <p>
                  <span>Planning phase - </span> where players will select which
                  initiative their corporation will pursue that round.
                </p>
              </li>
              <li>
                <p>
                  <span>Spending Phase - </span> where players will allocate
                  their available currency to fund either their own or other
                  corporations initiatives
                </p>
              </li>
              <li>
                <p>
                  <span>Income Phase - </span> where players will receive money
                  based on the number of assets their corporation holds.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="phase_details">
          <p className="section_top_text">A round proceeds as follows:</p>
          <div className="planning_phase_container">
            <h3>Planning Phase</h3>
            <ol>
              <li>
                <p>
                  Each player selects one of the initiatives in their hand and a
                  target player for that initiative and places them face down on
                  the table.
                </p>
                <ol type="a">
                  <li>Available initiatives are described below.</li>
                </ol>
              </li>
              <li>
                After each player has made their selection, all players turn
                their initiatives and targets face up and leave them on the
                table for all players to see. These are the available
                initiatives for the round.
              </li>
            </ol>
          </div>
          <div className="spending_phase_container">
            <h3>Spending Phase</h3>
            <ol className="bg_two_outer_ol">
              <li>
                <p>
                  Each player may select which initiatives they would like to
                  fund by placing Cheques face down upon the table and placing
                  any number of dollars on top of them.
                </p>
                <ol type="a" className="bg_two_inner_ol">
                  <li>
                    <p>
                      Players may fund as many or as few initiatives as they
                      please. Funding every initiative at the table and funding
                      none of them are both allowed.
                    </p>
                  </li>
                  <li>
                    <p>
                      Players may place down blank cheques in order to bluff.
                      Any money placed on a blank cheque is retained by the
                      player at the end of the round.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                Once all players have made their choices, all players turn their
                cheques face up to reveal which initiatives they have funded.
              </li>
              <li>
                Determine whether each player’s initiative met the minimum
                funding criteria to succeed.
                <ol type="a" className="bg_two_inner_ol">
                  <li>
                    <p>
                      Money placed down is always spent, even if the initiative
                      did not meet its funding criteria.
                    </p>
                  </li>
                  <li>
                    <p>
                      If an initiative is overfunded, no refunds are given to
                      any player.
                    </p>
                  </li>
                  <li>
                    <p>
                      If the funding criteria is met, distribute the rewards of
                      the initiative.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
          <div className="income_phase">
            <h3>Income Phase</h3>
            <ol className="bg_two_outer_ol">
              <li>
                <p>Check the Victory conditions outlined below.</p>
              </li>
              <li>
                <p>Give each player one dollar for each asset they hold.</p>
              </li>
              <li>
                <p>
                  Turn the dice to the next number and begin the next round. All
                  players pick their cheques, program cards, and targeting
                  tokens back up to be used again.
                </p>
              </li>
            </ol>
          </div>
          <div className="victory_condition_container">
            <h3>Victory Condition</h3>
            <h4>The game ends when</h4>
            <ul>
              <li>
                One player has seven assets at the end of any given round, or;
              </li>
              <li>all but one player has no money and no assets; or,</li>
              <li>At the end of the seventh round of play.</li>
            </ul>
          </div>
          <div className="winning_cond">
            <p>
              The winner is the player with the most assets. In the event that
              two or more players have the same number of assets after seven
              rounds, the player with the most money is the winner. If those
              players have the same amount of money, the game is tied.{" "}
            </p>
            <p>
              If multiple players reach seven assets during the same round, the
              game continues until one of them gains a lead, or until the end of
              the seventh round.
            </p>
          </div>
          <div className="gt_two_container">
            <h3>Corporate Initiative Cards</h3>
            <p>
              The “Owner” of an initiative card refers to the player who placed
              it down during a round; while the “Target” refers to the player
              the owner chose to target with the initiative.
            </p>
            <table className="gt_two">
              <tr>
                <th>Name</th>
                <th>Cost</th>
                <th>Effect when funded</th>
              </tr>
              <tr>
                <td>Market Expansion</td>
                <td>4$</td>
                <td>The Target gains 1 Asset.</td>
              </tr>
              <tr>
                <td>Strategic Partnership</td>
                <td>$5 from at least 2 investors</td>
                <td>
                  Each corporation that funded the initiative regains their
                  investment and an additional $1. If the Owner or Target
                  invested, they gain an extra $1
                </td>
              </tr>
              <tr>
                <td>Hostile</td>
                <td>$5</td>
                <td>The Target loses 1 Asset. The corporation that spent </td>
              </tr>
              <tr>
                <td>Takeover</td>
                <td>N/A</td>
                <td>
                  the most money funding this initiative gains 1 Asset. If there
                  is a tie, the Owner chooses how to break it.
                </td>
              </tr>
              <tr>
                <td>Denial Of Service</td>
                <td>$4 (or $6)</td>
                <td>
                  The Initiative played by the Target always fails, even if
                  funded. If this card receives $6 of funding, it additionally
                  removes 1 Asset from the target.
                </td>
              </tr>
              <tr>
                <td>Asset Preservation Protocols</td>
                <td>4$</td>
                <td>
                  The Target is immune to Denial of Service and Hostile
                  Takeovers during the round.
                </td>
              </tr>
            </table>
          </div>
        </div>
        <h3 className="caraousal_heading">
          The images below represent the game concept.
        </h3>
        <Caraousal props={bottomImgList} />
      </div>
    </div>
  );
};

export default BgTwo;
