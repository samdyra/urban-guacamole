import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = ({ actualData, iniHariKe, dbData }) => {
  const targetBesok =
    iniHariKe == 1
      ? 15
      : iniHariKe == 2
      ? 30
      : iniHariKe == 3
      ? 47.5
      : iniHariKe == 4
      ? 54.5
      : iniHariKe == 5
      ? 60.5
      : iniHariKe == 6
      ? 66.5
      : iniHariKe == 7
      ? 72.5
      : iniHariKe == 8
      ? 78.5
      : iniHariKe == 9
      ? 100
      : 0;

  const targetHariIni =
    iniHariKe == 1
      ? 0.5
      : iniHariKe == 2
      ? 15
      : iniHariKe == 3
      ? 30
      : iniHariKe == 4
      ? 47.5
      : iniHariKe == 5
      ? 57.5
      : iniHariKe == 6
      ? 60.5
      : iniHariKe == 7
      ? 66.5
      : iniHariKe == 8
      ? 72.5
      : iniHariKe == 9
      ? 78.5
      : 100;

  const totalProgress = actualData ? actualData[0].totalHariIni : 0;
  const ketertinggalan =
    Math.round((parseFloat(totalProgress) - parseFloat(targetHariIni)) * 100) /
    100;
  const totalData = dbData && dbData.length
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">General Statistics</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={totalData}
            text={`${totalData}`}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total Contribution Today<br></br>Target : 100 per day</p>
        <p className="desc">
          Update May be delayed depending on your location and internet connection .
        </p>
        {/* <div className="summary">
          <div className="item">
            <div className="itemTitle">Target Besok</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">{targetBesok}%</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target Hari ini</div>
            <div className="itemResult">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">{targetHariIni}%</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Ketertinggalan</div>
            {ketertinggalan < 0 ? (
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small" />
                <div>{ketertinggalan}%</div>
              </div>
            ) : ketertinggalan >= 0 ? (
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
                <div>{ketertinggalan}%</div>
              </div>
            ) : null}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
