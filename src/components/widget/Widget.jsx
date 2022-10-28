import "./widget.scss";

const Widget = ({ type, actualData }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "RATA-RATA UHI (2020)",
        isMoney: false,
        progress: 28.74,
      };
      break;
    case "order":
      data = {
        title: "RATA-RATA NDVI (2020)",
        isMoney: false,
        progress: actualData ? actualData[0].progressKDH : 0,
      };
      break;
    case "earning":
      data = {
        title: "RATA-RATA NDBI (2020)",
        isMoney: false,
        progress: actualData ? actualData[0].progressKDV : 0,
      };
      break;
    case "balance":
      data = {
        title: "RATA-RATA NIGHT LIGHT (2020)",
        isMoney: false,
        progress: actualData ? actualData[0].detailSituasi : 0,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        {data.progress == 100 ? (
          <span className="counterSuccess">{data.progress}</span>
        ) : (
          <span className="counter">{data.progress}</span>
        )}

        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"></div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
