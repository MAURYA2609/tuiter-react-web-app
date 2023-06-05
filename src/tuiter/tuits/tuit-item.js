import React from "react";
import TuitStat from "./tuit-stats";
const TuitItem = ({
  tuit = {
    _id: 123,
    topic: "Space",
    userName: "SpaceX",
    title:
      "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    time: "2h",
    image: "tesla.jpg",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img
            className="rounded-circle"
            height={48}
            src={`../../images/${tuit.image}`}
          />
        </div>
        <div className="col-11">
          <div>
            <span className="fw-bolder">{tuit.topic}</span> {tuit.handle} .{" "}
            {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
          <TuitStat tuit={tuit}/>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
