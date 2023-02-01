import "./widget.scss";

const Widget = ({ type, actualData }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "MEAN UHI (2020)",
        isMoney: false,
        progress: 33.74,
      };
      break;
    case "order":
      data = {
        title: "MEAN NDVI (2020)",
        isMoney: false,
        progress: 0.302,
      };
      break;
    case "earning":
      data = {
        title: "MEAN NDBI (2020)",
        isMoney: false,
        progress: 21,
      };
      break;
    case "balance":
      data = {
        title: "MEAN NIGHT LIGHT (2020)",
        isMoney: false,
        progress: 13.1,
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
