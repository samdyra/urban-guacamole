import React, { useEffect, useState, useReducer, useRef } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../Config/firebase/index";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import moment from "moment";
import "./index.css";
import "../../screens/FormScreen/FormScreen.css";
import UseCompressImage from "../../helpers/useCompressImage";

const initialState = {
  questions: [
    {
      id: "city",
      name: "Are you from this city?",
      options: [
        "I live and do my main activities here",
        "I only live here, but do my main activities somewhere else",
        "I’m just a guest",
      ],
      answer: "",
    },
    {
      id: "temp",
      name: "How is the temperature near you?",
      options: [
        "It's hot in here",
        "The temperature is normal",
        "I feel the cool air in here",
      ],
      answer: "",
    },
    {
      id: "vegetation",
      name: "Is there any vegetation (e.g. trees, plants) around you?",
      options: ["Yes, there is", "There isn’t any"],
      answer: "",
    },
    {
      id: "vegetationAmount",
      name: "In your own view, is the amount of vegetation around you is sufficient?",
      options: ["Yes", "No"],
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
    case "reset_questions":
      return { ...action.payload };
    default:
      return state;
  }
}

export default function AddKamerad({ latitude, longitude, acc }) {
  const [state, dispatch] = useReducer(questionsReducer, initialState);
  const [ progressCompress, setProgressCompress ] = useState(0)

  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

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
    setFormData({
      ...formData,
      [state.questions[questionIndex].id]: newAnswer,
    });
  }
  const [images, setImages] = useState([]);

  const [user] = useAuthState(auth);
  const [lat, setLat] = useState(latitude || 0);
  const [long, setLong] = useState(longitude || 0);

  useEffect(() => {
    setLong(longitude);
    setLat(latitude);
    setFormData({
      ...formData,
      latitude: latitude,
      longitude: longitude,
      date: moment().format("HH:mm MMMM DD YYYY"),
    });
  }, [latitude, longitude]);

  const date = moment().valueOf();
  
  const [formData, setFormData] = useState({
    image: "",
    date: "",
    latitude: lat,
    longitude: long,
    temp: "",
    vegetationAmount: "",
    vegetation: "",
    city: "",
  });

  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    // setFormData({ ...formData, image: e.target.files[0] });
    UseCompressImage(e, formData, setFormData, setProgressCompress);
    setImages([...images, e.target.files[0]]);
  };

  const handlePublish = () => {
    if (
      !formData.vegetation ||
      !formData.date ||
      !formData.temp ||
      !formData.latitude ||
      !formData.longitude ||
      !formData.city ||
      !formData.vegetationAmount
    ) {
      toast("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/lokasitemperature/${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          image: "",
          date: "",
          latitude: lat,
          longitude: long,
          temp: "",
          vegetationAmount: "",
          vegetation: "",
          city: "",
        });

        dispatch({
          type: "reset_questions",
          payload: initialState
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const kameradRef = collection(db, "temperature");
          addDoc(kameradRef, {
            city: formData.city,
            vegetation: formData.vegetation,
            vegetationAmount: formData.vegetationAmount,
            image: url,
            date: formData.date,
            datems: date,
            temp: formData.temp,
            accuracy: acc,
            latitude: lat,
            longitude: long,
          })
            .then(() => {
              toast(
                "Data Successfully Added, \n Thankyou for your Contribution!",
                { type: "success" }
              );
              setProgress(0);
            })
            .catch((err) => {
              toast("Error", { type: "error" });
            });
        });
      }
    );
  };

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
        </div>
      </form>
      <div className="form_container">
        <div className="image_upload_container">
          <label>
            <h1>Capture Situation Around You</h1>
            <p>(insert 2 (two) similar picture from Flir Camera)</p>
          </label>
          <div className="image_preview">
            {images.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} />
            ))}
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleImageChange(e)}
            id="imageupload"
            ref={fileInputRef}
          />
          <div
            onClick={handleDivClick}
            className="formbutton2"
            style={{ alignSelf: "flex-start", fontSize: "20px" }}
          >
            Choose File
          </div>
        </div>
        {progress === 0 ? null : (
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped mt-2"
              style={{ width: `${progress}%` }}
            >
              {`uploading image ${progress}%`}
            </div>
          </div>
        )}
        {progressCompress === 0 || progressCompress == 100 ? null : (
            <div className="progress">
              <div
                className="barloadingcompress"
                style={{ width: `${progressCompress}%` }}
              >
                {`compressing image ${progressCompress}%`}
              </div>
            </div>
          )}

        <button className="submit_button" onClick={handlePublish}>
          Publish
        </button>
      </div>
    </div>
  );
}
