import ShowCards from "./ShowCards";
import ShowCardInfo from "./ShowCardInfo";
import { useState } from "react";

const ShowWrapper = ({ show }) => {
  const [expandInfo, setExpandInfo] = useState({
    state: false,
    data: {},
  });
  const showInfo = (data) => {
    // window.alert(data.show.name);
    setExpandInfo({ state: true, data });
  };
  const closeInfo = () => {
    setExpandInfo({ state: false, data: "" });
  };
  const shows = show.map((e) => {
    return <ShowCards data={e} key={e.show.id} showInfo={showInfo} />;
  });
  return (
    <>
      {expandInfo.state && (
        <ShowCardInfo data={expandInfo.data} closeInfo={closeInfo} />
      )}
      <div className="showWrapper">{shows}</div>
    </>
  );
};

export default ShowWrapper;
