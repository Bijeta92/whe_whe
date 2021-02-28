import React from "react";
import { useContext, useState } from "react";
import NumberPadContext from "../context/NumberPadContext";

const Modal = (props) => {
  const { modal, onCloseModal, total } = useContext(NumberPadContext);

  const [received, setReceived] = useState();

  const [change, setChange] = useState();

  const changeGenerated = (received, total) => {
    // console.log(`Change generated received:${received} total:${total.value}`);
    var chgeGenerated = parseFloat(received) - parseFloat(total);
    setChange(chgeGenerated.toFixed(2));
  };

  return (
    <div className={modal.visible ? "" : "hide"}>
      <div className="modal">
        <div className="modal-container">
          <div className="modal-header">Cash</div>
          <div className="modal-body">
            <h4>Enter Amount Received</h4>
            <section>
              <form className="grid">
                <div className="modal-form">
                  <label htmlFor="total" id="total">
                    Total
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    ${total}
                  </label>
                </div>
                <div className="modal-form ">
                  <label htmlFor="received" id="received">
                    Received
                  </label>
                  <input
                    className="form-control "
                    type="number"
                    value={received}
                    onChange={(event) => {
                      setReceived(event.target.value);
                      // alert(`received ${received}`);
                      changeGenerated(event.target.value, total);
                    }}
                  />
                </div>
                <div className="modal-form">
                  <label htmlFor="changed" id="change">
                    Change
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    value={change}
                    // onChange={(event) => {
                    //   console.log(
                    //     `The change button value ${event.target.value}`
                    //   );
                    // }}
                  />
                </div>
                <div className="modal-form">
                  <button type="button" id="confirm-button">
                    Confirm
                  </button>
                  <button
                    type="button"
                    id="confirm-button"
                    onClick={() => {
                      onCloseModal();
                      setChange("");
                      setReceived("");
                    }}
                  >
                    Close
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
