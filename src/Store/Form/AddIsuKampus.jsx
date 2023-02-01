/* eslint-disable array-callback-return */
import React, { useEffect, useState, useReducer, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../Config/firebase/index";
import { toast } from "react-toastify";
import moment from "moment";
import "./index.css";
import "../../screens/FormScreen/FormScreen.css";
import UseCompressImage from "../../helpers/useCompressImage";
import Modal from "../../components/Modal/Modal";

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
  const kameradRef = collection(db, "temperature");
  const [images, setImages] = useState([]);
  const [lat, setLat] = useState(latitude || 0);
  const [long, setLong] = useState(longitude || 0);
  const [progressCompress, setProgressCompress] = useState(0);
  const [ablePublish, setAblePublish] = useState(false);
  const [imageAblePublish, setImageAblePublish] = useState(true);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    latitude: lat,
    longitude: long,
    temp: "",
    vegetationAmount: "",
    vegetation: "",
    city: "",
    celcius: "",
  });

  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const uploadImageFunction = (el) => {
    if (!el || el.length === 1 || el.length === 0) {
      return alert("Please upload 2 images");
    }

    function insertData(data, object) {
      let counter = 1;
      let key = "image";

      while (Object.keys(object).includes(key)) {
        key = `image${counter}`;
        counter++;
      }

      object[key] = data;
      return object;
    }

    el.map((image) => {
      const storageRef = ref(storage, `/lokasitemperature/${image.name}`);
      const uploadImage = uploadBytesResumable(storageRef, image);
      uploadImage.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progressPercent);
        },
        (err) => {
          console.error(err);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            insertData(url, formData);
            toast.success("Image uploaded successfully");
            setImageAblePublish(false);
          });
        }
      );
    });
  };

  useEffect(() => {
    setLong(longitude);
    setLat(latitude);
    setFormData({
      ...formData,
      latitude: latitude,
      longitude: longitude,
      date: moment().format("HH:mm MMMM DD YYYY"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  useEffect(() => {
    if (
      formData.vegetation &&
      formData.date &&
      formData.temp &&
      formData.latitude &&
      formData.longitude &&
      formData.city &&
      formData.vegetationAmount &&
      !imageAblePublish
    ) {
      setAblePublish(true);
    }
  }, [formData, images, imageAblePublish]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleImageChange = (e) => {
    UseCompressImage(e, images, setImages, setProgressCompress);
  };

  const handlePublish = () => {
    addDoc(kameradRef, {
      city: formData.city,
      vegetation: formData.vegetation,
      vegetationAmount: formData.vegetationAmount,
      image: formData.image,
      image1: formData.image1,
      date: formData.date,
      datems: moment.now(),
      temp: formData.temp,
      accuracy: acc,
      latitude: lat,
      longitude: long,
      name: formData.name,
      celcius: formData.celcius,
    })
      .then(() => {
        toast("Data Successfully Added, \n Thankyou for your Contribution!", {
          type: "success",
        });
        setProgress(0);
      })
      .catch((err) => {
        toast("Error", { type: "error" });
      });
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const submitForm = () => {
    handlePublish();
    toggleModal();
  };

  return (
    <div className="form_wrapper">
      {modal && <Modal toggleModal={toggleModal} modalName="form"></Modal>}
      <div className="form_container" style={{marginBottom: 30}}>
        <div className="question_container">
          <div className="nametemp">
          <label htmlFor="">Name:</label>
          <textarea name="name" rows={1} value={formData.name} onChange={(e) => handleChange(e)} />
          <label htmlFor="">Temperature in your area:</label>
          <textarea name="celcius" rows={1} value={formData.celcius} onChange={(e) => handleChange(e)} />
          </div>
        </div>
      </div>
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
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt="urban area"
              />
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
          {!formData.image && !formData.image1 && (
            <div style={{ display: "flex" }}>
              <div
                onClick={handleDivClick}
                className="formbutton2"
                style={{ alignSelf: "flex-start", fontSize: "20px" }}
              >
                Choose File
              </div>
              <div
                onClick={() => uploadImageFunction(images)}
                className={
                  imageAblePublish ? "formbutton2" : "formbutton2-disable"
                }
                style={{ alignSelf: "flex-start", fontSize: "20px" }}
              >
                Upload
              </div>
            </div>
          )}
        </div>
        {progress === 0 || progress === 100 ? null : (
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped mt-2"
              style={{ width: `${progress}%` }}
            >
              {`uploading image ${progress}%`}
            </div>
          </div>
        )}
        {progressCompress === 0 || progressCompress === 100 ? null : (
          <div className="progress">
            <div
              className="barloadingcompress"
              style={{ width: `${progressCompress}%` }}
            >
              {`compressing image ${progressCompress}%`}
            </div>
          </div>
        )}

        <button
          className={ablePublish ? "submit_button" : "submit_button_disable"}
          onClick={
            ablePublish ? submitForm : () => alert("Please fill all the data!")
          }
        >
          Publish
        </button>
      </div>
    </div>
  );
}
