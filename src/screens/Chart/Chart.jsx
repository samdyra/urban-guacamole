import React from "react";
import Navbar from "../../ComponentsV2/Navbar";
import style from "./FloodModel.module.css";
import fotoIMG from "../../Assets/Images/logoKemker.png";
import Chart from "../../Components/chart/Chart";
import Table from "../../Components/table/Table";
import Featured from "../../Components/featured/Featured";
import Widget from "../../Components/widget/Widget";
import NavBarDefault from "../../ComponentsV2/NavbarDefault";
import "./home.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Chart = () => {
  const {
    headerWrapper,
    headerText,
    latarContainer,
    latarTitle,
    latarContent,
    hiasanStyle,
    bc,
  } = style;
  const [data, setData] = useState("");

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

  // console.log(data.map((coor) => coor.x));
  return (
    <div className="home">
      <div className="homeContainer">
        <NavBarDefault></NavBarDefault>
        <div className="widgets">
          <Widget type="user" actualData={data} />
          <Widget type="order" actualData={data} />
          <Widget type="earning" actualData={data} />
          <Widget type="balance" actualData={data} />
        </div>
        <div className="charts">
          <Featured iniHariKe={iniHariKe} actualData={data} />
          <Chart
            title="Target dan Aktualisasi Kurva S (%)"
            aspect={2.5 / 1}
            actualData={data}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Hasil Pengukuran Koordinat</div>
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
