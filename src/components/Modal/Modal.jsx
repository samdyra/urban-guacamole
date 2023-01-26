import React, { useState } from "react";
import "./Modal.css";

export default function Modal({
  toggleModal,
  desc,
  title,
  modalName,
  score,
  correctAnswers,
  resetForm,
}) {
  return (
    <>
      {modalName === "formScreen" ? (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content-formscreen">
            <h1>your score is : </h1>
            <h1>{score}</h1>

            <h1>The Correct Answer is :</h1>

            {correctAnswers.map((answer, index) => {
              return (
                <h3>
                  {index + 1}. {answer}
                </h3>
              );
            })}

            <div className="modal-button-container">
              <div className="formbutton2">
                <a href="/">Back to Home</a>
              </div>
              <div className="formbutton2" onClick={resetForm}>
                Try Again
              </div>
            </div>

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      ) : modalName === "form" ? (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content-form">
            <h1>Thank you for your contribution!!!</h1>
            <div className="modal-button-container">
              <div className="modal-button-container">
                <div className="formbutton2">
                  <a href="/NetizenScreen">See Your Contribution</a>
                </div>
                <div className="formbutton2" onClick={resetForm}>
                  Fill Another Data
                </div>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}
