import React from "react";
import { FaTrash } from "react-icons/fa";
import NumberPadContext from "../context/NumberPadContext";
import { useContext } from "react";

const AddNumber = (props) => {
  const { deleteNumber, numberdashboard } = useContext(NumberPadContext);

  const clickHandler = () => {
    deleteNumber(props.id, numberdashboard);
  };

  return (
    <div className="grid grid-col-2">
      <h3>Mark: {props.value}</h3>

      <FaTrash
        className="icon-cursor icon-size-small grid-x-right"
        onClick={clickHandler}
      />
    </div>
  );
};

export default AddNumber;
