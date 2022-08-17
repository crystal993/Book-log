import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Modal(message) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button>X</button>
        <div className="title">
          <h1>타이틀</h1>
        </div>
        <div className="body">
          <p>{message}</p>
        </div>
        <div className="footer">
          <Button content={"취소"} />
          <Button content={"확인"} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
