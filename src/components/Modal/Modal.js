import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ toggleModal, desc, title }) {
  return (
    <>
      {
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{title}</h2>
            <p>{desc}</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      }
    </>
  );
}
