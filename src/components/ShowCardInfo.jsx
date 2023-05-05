

const ShowCardInfo = ({ data, closeInfo }) => {
  const summary = data.show.summary;
  const image = data.show.image || {};
  return (
    <div className="showCardInfo" onClick={() => closeInfo()}>
      <div className="infoHeader">
        <h2>{data.show.name}</h2>
        <h1>x</h1>
      </div>
      <div className="infoBody">
        <div className="infoBodyContent">
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div className="image">
          <h5>{data.show.genres.join(" / ")}</h5>
          <img
            src={
              image.original ||
              "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            }
          />
          <div>Rating: {data.show.rating.average || "Unavailable"}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowCardInfo;
