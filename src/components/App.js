import "../css/App.css";
import NumberPad from "../components/NumberPad";
import NumberDashboard from "../components/NumberDashboard";
import Modal from "../components/Modal";
import Image from "../components/Image";
import NumberPadContext from "../context/NumberPadContext";
import { useState } from "react";
import Header from "./Header";

const App = () => {
  const [numberpad, setNumberpad] = useState(false);
  const [numberdashboard, setnumberdashboard] = useState([]);
  const [total, setTotal] = useState(0);
  const [received, setReceived] = useState();

  const [change, setChange] = useState();

  const [modal, setModal] = useState({
    msg: "",
    visible: false,
  });

  const toggleNumber = () => {
    setNumberpad(!numberpad);
  };

  const onCloseModal = () => {
    setModal({
      msg: "",
      visible: false,
    });
  };

  const onButtonClick = () => {
    setModal({
      msg: "Button has been clicked",
      visible: true,
    });
  };

  const addNumber = (num) => {
    if (numberdashboard.length < 5) {
      console.log(`number clicked ${num}`);
      setnumberdashboard([...numberdashboard, num]);
    }
  };

  const deleteNumber = (id, numberdashboard) => {
    const updatedNumbers = numberdashboard.filter((number) => {
      return number.id !== id;
    });
    // console.log(`Updated numbers in the dashboard are: ${updatedNumbers}`);
    setnumberdashboard(updatedNumbers);
  };

  const numberAddition = (numberdashboard) => {
    var totall = 0;
    numberdashboard.forEach((mapItem) => {
      totall = totall + parseInt(mapItem.value);
    });

    setTotal(totall);
  };

  const resetDashboard = () => {
    setnumberdashboard([]);
  };

  return (
    <>
      <NumberPadContext.Provider
        value={{
          numberpad,
          numberdashboard,
          modal,
          total,
          toggleNumber,
          onCloseModal,
          onButtonClick,
          addNumber,
          resetDashboard,
          setnumberdashboard,
          numberAddition,
          deleteNumber,
          received,
          setReceived,
          change,
          setChange,
        }}
      >
        <div>
          <Modal />
        </div>
        <div className="app-container">
          <Header />
          <Image />
          <NumberPad />
          <NumberDashboard />
        </div>
      </NumberPadContext.Provider>
    </>
  );
};

export default App;
