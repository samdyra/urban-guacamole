/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useReducer, useState } from "react";
import "./FormScreen.css";
import questionimage from "../../images/questionimage.png";

const initialState = {
  questions: [
    {
      name: "What does UHI stand for?",
      options: [
        "Urban Heat Island",
        "Urban Heterogen Island",
        "Urban Heavy Island",
      ],
      answer: "",
      correctAnswer: "Urban Heat Island",
    },
    {
      name: "What does UHI mean?",
      options: [
        "Urban area that is significantly warmer than its surrounding rural areas due to human activities",
        "Urban area that is significantly cooler than its surrounding rural areas due to human activities",
        "Urban area that is significantly warmer than its surrounding rural areas due to seasonal cycle",
      ],
      answer: "",
      correctAnswer:
        "Urban area that is significantly warmer than its surrounding rural areas due to human activities",
    },
    {
      name: "What are the effects of UHI?",
      options: [
        "Affect human health",
        "Heighten chronic exposure to air pollutants",
        "Produce fresher air",
        "Create heat waves",
      ],
      answer: "",
      correctAnswer: "Affect human health",
    },
    {
      name: "Why is UHI stronger at night?",
      options: [
        "Because buildings, sidewalks, and parking lots block heat coming from the ground from rising into the cold night sky.",
        "Because there is no sunlight to activate photosynthesis.",
        "Because urban people produce more pollutant at night.",
      ],
      answer: "",
      correctAnswer:
        "Because buildings, sidewalks, and parking lots block heat coming from the ground from rising into the cold night sky.",
    },
    {
      name: "What are the solutions to UHI effect?",
      options: [
        "Reduce vegetation",
        "Create green roofs",
        "Planting trees",
        "Reduce carbon footprint",
      ],
      answer: "",
      correctAnswer: "Create green roofs",
    },
  ],
};

function questionsReducer(state, action) {
  switch (action.type) {
    case "update_answer":
      let newQuestions = state.questions.slice();
      newQuestions[action.questionIndex].answer = action.answer;
      return { ...state, questions: newQuestions };
    case "reset_questions":
      return { ...action.payload };
    default:
      return state;
  }
}

function FormPage() {
  const [state, dispatch] = useReducer(questionsReducer, initialState);

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

  const handlePublish = () => {
    alert("your Score is " + score);
    dispatch({ type: "reset_questions", payload: initialState });
  };

  const score = state.questions.reduce((acc, question) => {
    if (question.answer === question.correctAnswer) {
      return acc + 20;
    } else {
      return acc;
    }
  }, 0);

  const decoration = (
    <div className="decor">
      <img src={questionimage} alt="questionimage" />
      <img src={questionimage} alt="questionimage" />
      <img src={questionimage} alt="questionimage" />
    </div>
  );

  return (
    <div className="form_wrapper">
      <div className="title_container">Let's do QUIZ</div>
      <form>
        <div className="form_container">
          <div style={{ position: "absolute", right: "-153px", top: "50px" }}>
            {decoration}
          </div>
          <div style={{ position: "absolute", left: "-153px", top: "-50px" }}>
            {decoration}
          </div>
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
                            type="checkbox"
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
        </div>
      </form>
      <div className="submit_button" onClick={handlePublish}>
        Submit and check your score!
      </div>
    </div>
  );
}

export default FormPage;
