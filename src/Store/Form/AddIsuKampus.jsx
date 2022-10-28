import React, { useEffect, useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../Config/firebase/index";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import moment from "moment";

export default function AddKamerad({ latitude, longitude, acc }) {
  const [user] = useAuthState(auth);
  const [lat, setLat] = useState(latitude || 0);
  const [long, setLong] = useState(longitude || 0);

  useEffect(() => {
    setLong(longitude);
    setLat(latitude);
    setFormData({ ...formData, latitude: latitude, longitude: longitude, date: moment().format("HH:mm MMMM DD YYYY") });
  }, [latitude, longitude]);

  const [formData, setFormData] = useState({
    nama: "",
    image: "",
    date: "",
    latitude: lat,
    longitude: long,
    temp: "",
    place: "",
  });
  console.log(formData)
  console.log(lat, long)

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
            temp: formData.temp,
            accuracy: acc,
            latitude: lat,
            longitude: long,
          })
            .then(() => {
              toast("Data Successfully Added, \n Thankyou for your Contribution!", { type: "success" });
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
      <div className="formadmincontainer">
        <dic className="formtitle">Sample Temperature</dic>
        <div className="formadmin">
          <label htmlFor="">Name</label>
          <textarea
            name="nama"
            className="form-control"
            value={formData.nama}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formadmin">
          <label htmlFor="">Place Name</label>
          <textarea
            name="place"
            className="form-control"
            value={formData.place}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formadmin">
          <label htmlFor="">Date</label>
          <textarea
            name="date"
            className="form-control"
            value={formData.date}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formadmin">
          <label htmlFor="">Latitude</label>
          <textarea
            name="temp"
            className="form-control"
            value={lat}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formadmin">
          <label htmlFor="">Longitude</label>
          <textarea
            name="temp"
            className="form-control"
            value={long}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="formadmin">
          <label htmlFor="">Temperature (Celcius)</label>
          <textarea
            name="temp"
            className="form-control"
            value={formData.temp}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formadmin">
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
        <button className="formbutton" onClick={handlePublish}>
          Publish
        </button>
      </div>
    </div>
  );
}
