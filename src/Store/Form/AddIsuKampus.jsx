import React, { useEffect, useState, useReducer } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../Config/firebase/index";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import moment from "moment";

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
    case "reset_questions":
      return { ...action.payload };
    default:
      return state;
  }
}

export default function AddKamerad({ latitude, longitude, acc }) {
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
  console.log(date);
  const [formData, setFormData] = useState({
    nama: "",
    image: "",
    date: "",
    latitude: lat,
    longitude: long,
    temp: "",
    place: "",
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (
      !formData.nama ||
      !formData.date ||
      !formData.temp ||
      !formData.latitude ||
      !formData.longitude ||
      !formData.place
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
          nama: "",
          image: "",
          date: "",
          temp: "",
          latitude: "",
          longitude: "",
          place: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const kameradRef = collection(db, "temperature");
          addDoc(kameradRef, {
            nama: formData.nama,
            place: formData.place,
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
    <div>
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
      <div className="form_container">
        <div className="question_container">
          <label htmlFor="">Image (Optional)</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="form-control"
            onChange={(e) => handleImageChange(e)}
          />
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
        <button className="submit_button" onClick={handlePublish}>
          Publish
        </button>
      </div>
    </div>
  );
}
