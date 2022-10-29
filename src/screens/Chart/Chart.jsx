import React from "react";
import style from "./Chart.module.css";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Featured from "../../components/featured/Featured";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  query,
  collection,
  onSnapshot,
  limit,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../../Config/firebase/index";
const ChartScreen = () => {
  const {} = style;
  const [data, setData] = useState("");
  const [story, setStory] = useState([]);

  useEffect(() => {
    const storyRef = collection(db, "temperature");
    const q = query(storyRef, orderBy("datems"));
    onSnapshot(q, (snapshot) => {
      const story = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStory(story);
    });
  }, []);
  const fetchData = () => {
    axios
      .get(
        "https://api.steinhq.com/v1/storages/62a8469abca21f053e9d5ef3/Sheet2"
      )
      .then((response) => {
        let sheetdata = response.data;
        setData(sheetdata);
      })
      .catch((error) => console.error(error));
  };

  const iniHariKe = data ? data[0].iniHari : 1;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" actualData={data} />
          <Widget type="order" actualData={data} />
          <Widget type="earning" actualData={data} />
          <Widget type="balance" actualData={data} />
        </div>
        <div className="charts">
          <Featured iniHariKe={iniHariKe} actualData={data} dbData={story}/>
          <Chart
            title="Mean UHI Per 5 Year in Cirebon (Celcius)"
            aspect={2.5 / 1}
            actualData={data}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Detailed Contributed Data</div>
          <Table data={data} dbData={story} />
        </div>
      </div>
    </div>
  );
};

export default ChartScreen;
