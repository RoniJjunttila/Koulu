//seuraavana tarvii sen että jos on jo kerran valinnu pisteet X niin ei voi enää toista kertaa uudestaa.
//Jos koko rivi on sama niin uus kierros
//Pelin reset
//Parhaat tulokset? Mongossa
//Vuoden paras tulos vois olla boonus
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import { faDiceTwo } from "@fortawesome/free-solid-svg-icons";
import { faDiceThree } from "@fortawesome/free-solid-svg-icons";
import { faDiceFour } from "@fortawesome/free-solid-svg-icons";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";
import { faDiceSix } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import "./Home.css";
//https://fontawesome.com/icons/dice-one?f=classic&s=solid&sz=2xl
const About = () => {
  const NBR_OF_DICES = 5;
  const NBR_OF_THROWS = 3;
  const NumberOfIcons = 6;
  const BaseBonus = 63;
  let thrownNumbers = [];
  const [numberOfThrowsLeft, setNumberOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [selectedDices, setSelectedDices] = useState(
    new Array(NBR_OF_DICES).fill(false, 1)
  );
  const [selectedIcons, setSelectedIcons] = useState(
    new Array(NumberOfIcons + 1).fill(false, 1)
  );
  const [startText, setStartText] = useState("Throw dices");
  const [bonus, setBonus] = useState(BaseBonus);
  const [isBonus, setIsBonus] = useState(false);
  const [selected, setSelected] = useState(false);
  const [total, setTotal] = useState(0);
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);
  const [board, setBoard] = useState([]);
  const row = [];
  const doubles = [];
  const [isEnabled, setIsEnabled] = useState(false);
  const [dices, setDices] = useState([]);
  const [turnsleft, setTurnsleft] = useState(6);
  const [boardHidden, setboardHidden] = useState(false);
  const [buttonText, setButtonText] = useState("Throw dices");
  const bonustext = {
    0: {
      wait: "You are " + bonus + " points away from bonus.",
      bonus: "You got the bonus",
    },
  };

  /*   function resetBoard() { 
    if (numberOfThrowsLeft === 0 || IsBonus === true){
        for(let i = 0; i < NBR_OF_DICES + 1; i++) {
            selectedDices[i] = false;
            setNumberOfThrowsLeft(0);    
    } 
}
} */

  function GameState() {
    if (numberOfThrowsLeft === 3) {
      setStartText("Throw dices.");
    } else if (numberOfThrowsLeft > 1) {
      setStartText("Select dices and throw dices again.");
    } else if (numberOfThrowsLeft === 1) {
      setButtonText("Calculate your points");
      setStartText("Select dices and calculate your points.");
    }
  }

  function throwDices() {
    if (numberOfThrowsLeft === 3) {
      setboardHidden(false);
    }
    GameState();
    let newDices = [...dices];
    let newBoard = [...board];
    if (turnsleft === 0 && numberOfThrowsLeft === 0) {
      // resetGame();
    } else {
      const values = (currentValue) => currentValue === false;
      if (
        (selectedDices.every(values) === false && numberOfThrowsLeft > 0) ||
        numberOfThrowsLeft === 3 ||
        isBonus === true ||
        selected === true
      ) {
        setNumberOfThrowsLeft(numberOfThrowsLeft - 1);
        setSelected(false);
        newDices = [];
        newBoard = [];
        for (let i = 0; i < NBR_OF_DICES; i++) {
          if (!selectedDices[i]) {
            const randomNumber = Math.floor(Math.random() * 6 + 1);
            switch (randomNumber) {
              case 1:
                newDices.push(
                  <FontAwesomeIcon
                    key={i}
                    size="2xl"
                    value={1}
                    icon={faDiceOne}
                  />
                );
                break;
              case 2:
                newDices.push(
                  <FontAwesomeIcon
                    key={i}
                    size="2xl"
                    value={2}
                    icon={faDiceTwo}
                  />
                );
                break;
              case 3:
                newDices.push(
                  <FontAwesomeIcon
                    key={i}
                    size="2xl"
                    value={3}
                    icon={faDiceThree}
                  />
                );
                break;
              case 4:
                newDices.push(
                  <FontAwesomeIcon
                    key={i}
                    size="2xl"
                    value={4}
                    icon={faDiceFour}
                  />
                );
                break;
              case 5:
                newDices.push(
                  <FontAwesomeIcon
                    key={i}
                    size="2xl"
                    value={5}
                    icon={faDiceFive}
                  />
                );
                break;
              case 6:
                newDices.push(
                  <FontAwesomeIcon
                    key={i}
                    size="2xl"
                    value={6}
                    icon={faDiceSix}
                  />
                );
                break;
            }
          } else {
            newDices.push(board[i]);
          }
        }
        newBoard = [...newDices];
      } else if (numberOfThrowsLeft === 0) {
        getPoints();
      } else {
        setStartText("Select at least one dice before throwing again.");
      }
      // IsBonus();
    }
    setDices(newDices);
    setBoard(newBoard);
  }

  function getPoints() {
    let selectedValues = [];
    setStartText("Please select your points before starting a new round.");
    const points = selectedDices.filter((index) => index === true).length;
    for (let i = 0; i < NBR_OF_DICES; i++) {
      if (selectedDices[i]) {
        selectedValues.push(board[i]);
      }
      const selectedDiceValues = selectedValues.map((item) => item.props.value);
      const allValuesSame = selectedDiceValues.every(
        (value) => value === selectedDiceValues[0]
      );
      const totalPoints = parseInt(selectedDiceValues) * parseInt(points);
      if (
        allValuesSame &&
        !selectedDiceValues.every((index) => index == false)
      ) {
        setStartText("You got " + totalPoints + " points this round.");
        setTurnsleft(turnsleft - 1);
        setNumberOfThrowsLeft(3);
        selectedDices.fill(false);
        setTotal(total + totalPoints);
        setBonus(bonus - totalPoints);
        switch (selectedDiceValues) {
          case 1:
            setOne(totalPoints);
            break;
          case 2:
            setTwo(totalPoints);
            break;
          case 3:
            setThree(totalPoints);
            break;
          case 4:
            setFour(totalPoints);
            break;
          case 5:
            setFive(totalPoints);
            break;
          case 6:
            setSix(totalPoints);
            break;
        }
        setboardHidden(true);
        // tässä alkais uus kierros  + laittais pisteet automaattisesti
      } else if (selectedDiceValues.every((index) => index == false)) {
        setStartText("Select dice");
      } else {
        setStartText("Not all selected dices are the same.");
        selectedDices.fill(false);
      }
    }
  }

  const diceColors = ["white", "green"];
  const setDiceColor = (index) => {
    if (board.every((val, i, arr) => val === arr[0])) {
      return diceColors[1];
    } else {
      return selectedDices[index] ? diceColors[1] : diceColors[2];
    }
  };

  function selectDice(i) {
    let dices = [...selectedDices];
    dices[i] = selectedDices[i] ? false : true;
    setSelectedDices(dices);
    console.log(dices);
  }

  const [inputValue, setInputValue] = useState("");

  // Step 2: Attach the onChange event handler to update the state
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    
    <div className="body">
      <div className="angle-container">
        <div className="yellow-side">
        <div className="scoreboard">
          <div className="gameboard">
            <div>{row}</div>
            <div>Throws left: {numberOfThrowsLeft}</div>
            <div>{startText}</div>
            <div>
              {boardHidden ? null : (
                <div className="dices">
                  {board.length === 5
                    ? board.map((item, index) => (
                        <button
                          onClick={() => {
                            selectDice(index);
                            console.log("Button clicked at index", index);
                          }}
                          style={{ backgroundColor: setDiceColor(index) }}
                          key={index}
                        >
                          {item}
                        </button>
                      ))
                    : null}
                </div>
              )}
            </div>
            <button className="button" onClick={() => throwDices()}>
              {buttonText}
            </button>
            <div>Total: {total}</div>
            <div>Turns left: {turnsleft}</div>
            <div>{isEnabled ? bonustext[0].bonus : bonustext[0].wait}</div>
          </div>
          </div>
          <div className="gamedots">
            <div>
              <div className="col"></div>
              <div>
                {one}
                <div>
                  <button
                    onClick={() => {
                      console.log(board);
                    }}
                  >
                    {" "}
                    {/* yks selected arvo, hakea kaikki boardista ja board.props.value ja laskea ne kaikkia yhteen */}
                    <FontAwesomeIcon size="2xl" icon={faDiceOne} />
                  </button>
                </div>
              </div>
              <div>
                {two}
                <div>
                  <button>
                    <FontAwesomeIcon size="2xl" icon={faDiceTwo} />
                  </button>
                </div>
              </div>
              <div>
                {three}
                <div>
                  <button>
                    <FontAwesomeIcon size="2xl" icon={faDiceThree} />
                  </button>{" "}
                </div>
              </div>
              <div>
                {four}
                <div>
                  <button>
                    <FontAwesomeIcon size="2xl" icon={faDiceFour} />
                  </button>
                </div>
              </div>
              <div>
                {five}
                <div>
                  <button>
                    <FontAwesomeIcon size="2xl" icon={faDiceFive} />
                  </button>{" "}
                </div>
              </div>
              <div>
                {six}
                <div>
                  {" "}
                  <button>
                    <FontAwesomeIcon size="2xl" icon={faDiceSix} />
                  </button>{" "}
                </div>
              </div>
              <div className="col"></div>
            </div>
            <div>{doubles}</div>
          </div>
        </div>
        <div className="blue-side">
          <div className="scoreboard">
            <div className="year-results">
              <h3>Vuoden parhaat tuloset</h3>
            </div>
            <div className="alltime-results">
              <h3>Kaikkien aikojen parhaat tulokset</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
