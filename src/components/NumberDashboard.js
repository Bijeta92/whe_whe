import React from "react";
import { useContext } from "react";
import NumberPadContext from "../context/NumberPadContext";
import AddNumber from "../components/AddNumber";
import Total from "../components/Total";

const NumberDashboard = (props) => {
  const { numberdashboard, numberAddition } = useContext(NumberPadContext);
  const totalValue = () => {
    numberAddition(numberdashboard);
  };

  return (
    <div className="number-dashboard">
      <div className="total-component">
        <div className="show-component">
          <header>Numbers Selected:</header>
          <section className="add-number">
            {numberdashboard.map((number) => (
              <AddNumber key={number.id} id={number.id} value={number.value} />
            ))}
          </section>
          <footer>
            <Total totalValue={totalValue()} />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NumberDashboard;
