import React, { useState, useEffect } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faSquare as farSquare } from "@fortawesome/free-regular-svg-icons"; // Use regular (hollow) square
import logo from "./logo.svg";
import "./App.css";

//alottaa lisäämään itemejä keltaselle puolelle.
//tarvii oikean multipage
///
//Ehdollinen render. Jos, p, div, href, class, name spanit ympärille <span style={{color: lightblue}}>{string}</span> jos className="<span style={{"color: coralred"}}>{string}</span> 
//
const Home = () => {
  const todo = ["tausta", "react-logo", "text", "gittext"];

  const code = [
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

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const [hiddenBackground, setHiddenBackground] = useState(true);
  const [hiddenIMG, setHiddenIMG] = useState(true);
  const [hiddenText, setHiddenText] = useState(true);
  const [hiddenLink, setHiddenLink] = useState(true);

  return (
    <div className="body">
      <div className="angle-container">
        <div className="yellow-side">
          <div className="window-edge">
            <div className="window-header">
              <div className="localhost-text">
                <span>localhost</span>
                <span className="idendifier">:3000</span>
              </div>
              <div className="window-control-buttons">
                <div>
                  - <FontAwesomeIcon className="icons" icon={farSquare} />
                  &nbsp;
                  <FontAwesomeIcon className="icons" icon={faX} />
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "white" }}>
              <div
                id={`${hiddenBackground ? "hidden" : ""}`}
                className="body-screen"
              >
                <img
                  id={`${hiddenIMG ? "hidden" : ""}`}
                  src={logo}
                  className="App-logo"
                  alt="logo"
                />
                <div>
                  <p id={`${hiddenText ? "hidden" : ""}`}>
                    Kaikki koodit löytyy gitistä :)
                  </p>
                  <a
                    id={`${hiddenLink ? "hidden" : ""}`}
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
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
                    setHiddenBackground(false);
                    break;
                  case 1:
                    setHiddenText(false);
                    break;
                  case 2:
                    setHiddenIMG(false);
                    break;
                  case 3:
                    setHiddenLink(false);
  
                    break;
                }
              }, timeoutDuration);
       

/*             const substrings = [
              "div",
              "img",
              "className",
              "p",
              "a",
              "href",
              "target",
              "rel",
            ];

            for (const substring of substrings) {  
            if(item.includes(substring)){
              const start = item.indexOf(substring);
              const end = start + substring.length;
              return (
                <div className={`code code-${index}`}>
                  <span style={{ textAlign: "left", color: "white"}}>{item.substring(0, start)}</span>
                <span
                  key={index}
                  style={{
                    textAlign: 'left',
                    width: `${item.length * 9}px`,
                    animation: `coding ${item.length / 25}s steps(${item.length}), valkytys 0.4s step-end infinite alternate`,
                    borderRight: '3px solid',
                    color: '#1d379d', // Set the text color to blue for <p> tags
                  }}
                >{item.substring(start, end)}</span>
                <span style={{ textAlign: "left", color: "white"}}>{item.substring(end, item.length)}</span>
                </div>
              );
            } else {
              return(
                <p
                key={index}
                className={`code code-${index}`}
                style={{
                  textAlign: 'left',
                  width: `${item.length * 9}px`,
                  animation: `coding ${item.length / 25}s steps(${item.length}), valkytys 0.4s step-end infinite alternate`,
                  borderRight: '3px solid',
                  color: 'white', // Set the text color to white for other elements
                }}
              >
                {item}
              </p>
              )
            }
          } */
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
};

export default Home;

/* User
  .code {
    transform: skewX(-15deg);
    animation: coding 2s steps(4), valkytys .4s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-size: small;
    color: green;
  }

  @keyframes coding {
    from {
      width: 0
    }
  }

  return (
    <div className="body">
      <div className="angle-container">
        <div className="yellow-side"></div>
        <div className="blue-side">
            {code.slice(0, currentIndex).map((item, index) => (
              <p style={{width: `${code[currentIndex]?.length * 5}px`}} className="code" key={index}>{item}<br /></p>
            ))}
        </div>
      </div>
    </div>
  );
};
*/
