import React from "react";
import { useContext, useState } from "react";
import NumberPadContext from "../context/NumberPadContext";

const NumberPad = (props) => {
  const {
    onButtonClick,
    addNumber,
    resetDashboard,
    numberdashboard,
  } = useContext(NumberPadContext);

  // var buttonMap = [
  //   ["1050", false],
  //   ["1051", false],
  // ];
  // const [buttonClick, setButtonClick] = useState(buttonMap);
  // let buttonStatusMap = [
  //   { id: "1050", status: false },
  //   { id: "1051", status: false },
  // ];
  const [buttonClick1, setButtonClick1] = useState(false);
  const [buttonClick2, setButtonClick2] = useState(false);
  const [buttonClick3, setButtonClick3] = useState(false);
  const [buttonClick4, setButtonClick4] = useState(false);
  const [buttonClick5, setButtonClick5] = useState(false);
  const [buttonClick6, setButtonClick6] = useState(false);
  const [buttonClick7, setButtonClick7] = useState(false);
  const [buttonClick8, setButtonClick8] = useState(false);
  const [buttonClick9, setButtonClick9] = useState(false);
  const [buttonClick10, setButtonClick10] = useState(false);
  const [buttonClick11, setButtonClick11] = useState(false);
  const [buttonClick12, setButtonClick12] = useState(false);
  const [buttonClick13, setButtonClick13] = useState(false);
  const [buttonClick14, setButtonClick14] = useState(false);
  const [buttonClick15, setButtonClick15] = useState(false);
  const [buttonClick16, setButtonClick16] = useState(false);
  const [buttonClick17, setButtonClick17] = useState(false);
  const [buttonClick18, setButtonClick18] = useState(false);
  const [buttonClick19, setButtonClick19] = useState(false);
  const [buttonClick20, setButtonClick20] = useState(false);

  // const clickButton = (id) => {
  //   // for(let i = 0; i<buttonArray.length;i++){
  //   //   if(id === ){
  //   //   }
  //   // }
  //   // console.log(`id received from button click ${id}`);
  //   // setButtonClick(buttonStatusMap);
  //   //buttonStatusMap.forEach((item) => {
  //   //if (id === item.id && item.status === false) {
  //   //buttonStatusMap.get(item.id).put(false);
  //   //var buttonClicked = true;
  //   //console.log(`Entered into if statement. Pinting itemId: ${item.id}`);
  //   //setButtonClick(buttonStatusMap);
  //   //}
  //   // } else {
  //   //   setButtonClick(buttonClick);
  //   // }
  //   ///});
  // };

  const buttonClicked = () => {
    return "button-clicked";
  };
  const buttonNotClicked = () => {
    return "button-notClicked";
  };

  // console.log(`returning value from buttonClicked() ${buttonClicked()}`);

  return (
    <div className="numberpad">
      <div className="grid-container">
        <button
          id="1050"
          className={
            buttonClick1 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="1"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick1(true);
              addNumber(number);
            }
            // setButtonClick1(true);
            // addNumber(number);
            // console.log(`Number clicked on numberPad: ${number.id}`);
          }}
        >
          1
        </button>
        <button
          className={
            buttonClick2 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="2"
          id="1051"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick2(true);
              addNumber(number);
            } else {
              setButtonClick1(false);
            }
          }}
        >
          2
        </button>
        <button
          className={
            buttonClick3 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="3"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick3(true);
              addNumber(number);
            }
          }}
        >
          3
        </button>
        <button
          className={
            buttonClick4 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="4"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick4(true);
              addNumber(number);
            }
          }}
        >
          4
        </button>
        <button
          className={
            buttonClick5 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="5"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick5(true);
              addNumber(number);
            }
          }}
        >
          5
        </button>
        <button
          className={
            buttonClick6 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="6"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick6(true);
              addNumber(number);
            }
          }}
        >
          6
        </button>
        <button
          className={
            buttonClick7 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="7"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick7(true);
              addNumber(number);
            }
          }}
        >
          7
        </button>
        <button
          className={
            buttonClick8 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="8"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick8(true);
              addNumber(number);
            }
          }}
        >
          8
        </button>
        <button
          className={
            buttonClick9 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="9"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick9(true);
              addNumber(number);
            }
          }}
        >
          9
        </button>
        <button
          className={
            buttonClick10 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="10"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick10(true);
              addNumber(number);
            }
          }}
        >
          10
        </button>
        <button
          className={
            buttonClick11 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="11"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick11(true);
              addNumber(number);
            }
          }}
        >
          11
        </button>
        <button
          className={
            buttonClick12 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="12"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick12(true);
              addNumber(number);
            }
          }}
        >
          12
        </button>
        <button
          className={
            buttonClick13 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="13"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick13(true);
              addNumber(number);
            }
          }}
        >
          13
        </button>
        <button
          className={
            buttonClick14 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="14"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick14(true);
              addNumber(number);
            }
          }}
        >
          14
        </button>
        <button
          className={
            buttonClick15 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="15"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick15(true);
              addNumber(number);
            }
          }}
        >
          15
        </button>
        <button
          className={
            buttonClick16 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="16"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick16(true);
              addNumber(number);
            }
          }}
        >
          16
        </button>
        <button
          className={
            buttonClick17 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="17"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick17(true);
              addNumber(number);
            }
          }}
        >
          17
        </button>
        <button
          className={
            buttonClick18 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="18"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick18(true);
              addNumber(number);
            }
          }}
        >
          18
        </button>
        <button
          className={
            buttonClick19 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="19"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick19(true);
              addNumber(number);
            }
          }}
        >
          19
        </button>
        <button
          className={
            buttonClick20 === true ? "button-notClicked" : "button-clicked"
          }
          type="button"
          value="20"
          onClick={(event) => {
            const number = {
              id: Math.floor(Math.random() * 500000) + 1,
              value: event.target.value,
            };
            if (numberdashboard.length < 5) {
              setButtonClick20(true);
              addNumber(number);
            }
          }}
        >
          20
        </button>
        <button className="cashout" type="button" onClick={onButtonClick}>
          CASH
        </button>
        <button
          className="clearout"
          onClick={(event) => {
            resetDashboard();
          }}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default NumberPad;
