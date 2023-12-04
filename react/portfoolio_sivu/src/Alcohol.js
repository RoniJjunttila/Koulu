import "./Alcohol.css";
import "./Home.css";
import React, { useState, useEffect } from "react";
/////////////////













///vasemmalla voisi tulla jotain rajoja koodauksen sijasta














/////////////
export default function App() {
  const code2 = [
    "<div className='body-screen'>",
    "<img src={logo} className='App-logo' alt='logo' />",
    "<div>",
    "<p>Kaikki koodit löytyy gitistä :)</p>",
    "<a",
    "className='App-link'",
    "href='https://reactjs.org'",
    "target='_blank'",
    "rel='noopener noreferrer'",
    ">",
    "Github",
    "</a>",
    "</div>",
  ];

  const code3 = [
    "<h2>#Calculating alcohol blood &#60;level.h&#62;</h2>",
    "<label>&#60;Weight{''}<input",
    "placeholder=<type here>",
    "name=Weight",
    "onChange={(e) => setWeight(e.target.value)}",
    "/>",
    "</label>",
    "<div>",
    "<label> &#60;Bottles </label>",
    "<select",
    "type=number",
    "value={Bottles}",
    "onChange={(e) => setBottles(e.target.value)}>",
    "<output>{count.toFixed(1)}</output>",
    "</div>",
    "<button>Calculate</button>",
  ];

  const code = [
    "Aikuisen miehen ...........",

  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [Gender, setGender] = useState("male");
  const [Bottles, setBottles] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [Time, setTime] = useState(0);

  const [headerHidden, setHeaderHidden] = useState(true);
  const [weightHidden, setWeightHidden] = useState(true);
  const [bottlesHidden, setBottlesHidden] = useState(true);
  const [timeHidden, setTimeHidden] = useState(true);
  const [genderHidden, setGenderHidden] = useState(true);
  const [resultHidden, setResultHidden] = useState(true);
  const [buttonHidden, setButtonHidden] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    let tulos = 0;
    let liters = Bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = Weight / 10;
    let gramsleft = grams - burning * Time;
    if (Gender === "male") {
      tulos = gramsleft / (Weight * 0.7);
    } else {
      tulos = gramsleft / (Weight * 0.6);
    }
    if (tulos < 0) {
      setCount(0);
    } else {
      setCount(tulos);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < code.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, code[currentIndex]?.length * 12);
    return () => clearInterval(interval);
  }, [currentIndex, code]);
  return (
    <div className="body">
      <div className="angle-container">
        <div className="yellow-side">
          <div className="window-edge">
            <div className="window-header">
              <div className="idendifier">
                <span>Prompt</span>
              </div>
              <div className="window-control-buttons"></div>
            </div>

            <div className="App">
              <form onSubmit={handleSubmit}>
                <div className="runko">
                  <h2 id={`${headerHidden ? "hidden" : ""}`}>
                    #Calculating alcohol blood &#60;level.h&#62;
                  </h2>
                  <label id={`${weightHidden ? "hidden" : ""}`}>
                    &#60;Weight{" "}
                    <input
                      placeholder="<type here>"
                      name="Weight"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </label>
                  <div id={`${bottlesHidden ? "hidden" : ""}`}>
                    <label> &#60;Bottles </label>
                    <select
                      type="number"
                      value={Bottles}
                      onChange={(e) => setBottles(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <div id={`${timeHidden ? "hidden" : ""}`}>
                    <label>&#60;Time </label>
                    <select
                      type="number"
                      value={Time}
                      onChange={(e) => setTime(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <label id={`${genderHidden ? "hidden" : ""}`}>
                    &#60;Gender
                    <input
                      type="radio"
                      value="Male"
                      name="Gender"
                      defaultChecked
                      onChange={(e) => setGender(e.target.value)}
                    />{" "}
                    Male
                    <input
                      type="radio"
                      value="Female"
                      name="Gender"
                      onChange={(e) => setGender(e.target.value)}
                    />{" "}
                    Female
                  </label>
                  <div id={`${resultHidden ? "hidden" : ""}`}>
                    <output>{count.toFixed(1)}</output>
                  </div>
                  <button id={`${buttonHidden ? "hidden" : ""}`}>
                    Calculate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="blue-side">
       
          {code.slice(0, currentIndex).map((item, index) => {
            const timeoutDuration = item.length * 35; // Calculate the duration for each item
         
            setTimeout(() => {
              document.querySelector(`.code-${index}`).style.borderRight =
                "none";
              switch (index) {
                case 0:
                  setHeaderHidden(false);
                  break;
                case 1:
                  setWeightHidden(false);
                  break;
                case 2:
                  setBottlesHidden(false);
                  break;
                case 3:
                  setTimeHidden(false);
                  break;
                case 4:
                  setGenderHidden(false);
                  break;
                case 5:
                  setResultHidden(false);
                  break;
                case 6:
                  setButtonHidden(false);
                  break;
              }
            }, timeoutDuration);
       

            return (
              <p
                key={index}
                className={`code code-${index}`}
                style={{
                  textAlign: "left",
                  color: "white",
                  width: `${item.length * 9}px`,
                  animation: `coding ${item.length / 25}s steps(${
                    item.length
                  }), valkytys 0.4s step-end infinite alternate`,
                  borderRight: "3px solid",
                }}
              >
                {item}
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
/*     <div className="body">
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div className="runko">
            <h2>
              #Calculating alcohol blood &#60;level.h&#62;
            </h2>
            <label>
              &#60;Weight{" "}
              <input
                placeholder="<type here>"
                name="Weight"
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>

            <div>
              <label> &#60;Bottles </label>
              <select
                type="number"
                value={Bottles}
                onChange={(e) => setBottles(e.target.value)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <label>&#60;Time </label>
              <select
                type="number"
                value={Time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <label>
              &#60;Gender
              <input
                type="radio"
                value="Male"
                name="Gender"
                defaultChecked
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
              <input
                type="radio"
                value="Female"
                name="Gender"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
            </label>
            <div>
              <output>{count.toFixed(1)}</output>
            </div>
            <button>Calculate</button>
          </div>
        </form>
      </div>
    </div>
  );
} */
