import React from "react";
import NumberPadContext from "../context/NumberPadContext";
import { useContext } from "react";
const Total = (props) => {
  const { total } = useContext(NumberPadContext);

  //   const totalValue = () => {
  //     numberAddition(numberdashboard);
  //   alert(`Props value in TotalJS ${total}`);
  //   };
  return (
    <div className="grid grid-x-bottom">
      <footer>Total: ${total}</footer>
    </div>
  );
};

export default Total;
