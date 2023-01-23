/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useReducer, useState } from "react";
import "./FormScreen.css";

const initialState = {
  questions: [
    {
      name: "What's your favorite color?",
      options: ["Red", "Green", "Blue"],
      answer: "",
    },
    {
      name: "What's your favorite animal?",
      options: ["Dog", "Cat", "Elephant"],
      answer: "",
    },
    {
      name: "What's your favorite hobby?",
      options: ["Reading", "Fishing", "Skiing"],
      answer: "",
    },
  ],
};

function questionsReducer(state, action) {
  switch (action.type) {
    case "update_answer":
      let newQuestions = state.questions.slice();
      newQuestions[action.questionIndex].answer = action.answer;
      return { ...state, questions: newQuestions };
    default:
      return state;
  }
}

function FormPage() {
  const [state, dispatch] = useReducer(questionsReducer, initialState);
  const [images, setImages] = useState([]);

  function handleQuestionChange(event, questionIndex) {
    let newAnswer = event.target.value;
    if (state.questions[questionIndex].answer === newAnswer) {
      newAnswer = "";
    }
    let newQuestions = state.questions.slice();
    newQuestions[questionIndex].answer = newAnswer;
    dispatch({
      type: "update_answer",
      questionIndex: questionIndex,
      answer: newAnswer,
    });
  }

  console.log(state);

  function handleImageChange(event) {
    setImages([...images, ...event.target.files]);
  }

  return (
    <div className="form_wrapper">
      <form>
        <div className="form_container">
          {state.questions.map((question, index) => (
            <div className="question_container">
              <React.Fragment key={index}>
                <label>
                  <div style={{ marginBlock: "15px" }}>{question.name}</div>
                  <div className="options_container">
                    {question.options.map((option, idx) => (
                      <React.Fragment key={idx}>
                        <label>
                          <input
                            type="radio"
                            value={option}
                            onClick={(e) => handleQuestionChange(e, index)}
                            checked={question.answer === option}
                          />
                          <span className="checkmark"></span>
                          {option}
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </label>
                <br />
              </React.Fragment>
            </div>
          ))}
          <label>
            Upload Images:
            <input type="file" multiple onChange={handleImageChange} />
          </label>
          <div>
            {images.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`image-${index}`}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
