import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Config/firebase/index"
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const AddCurhat = () => {
  const [formData, setFormData] = useState({
    curhat: "",
  });
  const [user] = useAuthState(auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = (e) => {
    if (!formData.curhat) {
      toast("Please fill all the fields");
      return;
    }

    const storyRef = collection(db, "curhat");
    addDoc(storyRef, {
      curhat: formData.curhat,
    })
      .then(() => {
        toast("added successfully", { type: "success" });
      })
      .catch((err) => {
        toast("adding story", { type: "error" });
      });
  };

  return (
    <div className="border p-3 mt-3 bg-light" style={{ width: "300px" }}>
      {!user ? (
        <>
          <h2>
            <Link to="/login">Login to create article</Link>
          </h2>
        </>
      ) : (
        <div className="formadmincontainer">
          <div className="formtitle">Form</div>
          <div className="formadmin">
            <label htmlFor="">Curhat</label>
            <input
              type="text"
              name="curhat"
              className="formik"
              value={formData.curhat}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="formbutton" onClick={handlePublish}>
            Publish
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCurhat;
