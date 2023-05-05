const ShowCards = ({ data, showInfo }) => {
  const image = data.show.image || {};
  const handleOnClick = () => {
    showInfo(data);
  };
  return (
    <div className="cardWrapper" onClick={handleOnClick}>
      <h5>{data.show.genres.join(" / ")}</h5>
      <img
        src={
          image.original ||
          "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
      />
      <div className="showCards">
        {data.show.name}
        <br />
        Rating: {data.show.rating.average || "Unavailable"}
        <br />
        {data.show.language}
      </div>
    </div>
  );
};
export default ShowCards;
