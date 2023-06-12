import React from "react";
import TuitStat from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";
import {deleteTuitThunk} from "../services/tuits-thunks"
import { FaTrashAlt } from "react-icons/fa";

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
    likes: 25,
    dislikes: 10,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img
            className="float-end rounded-circle"
            height={50}
            src={`../../images/${tuit.image}`}
            alt="Profile"
          />
        </div>
        <div className="col-10">
          <div>
            <span className="fw-bolder">{tuit.topic}</span> {tuit.handle} .{" "}
            {tuit.time}
            <FaTrashAlt
              className="float-end delete-icon wd-icon"
              onClick={() => deleteTuitHandler(tuit._id)}
            />
          </div>
          <div>{tuit.tuit}</div>
          <TuitStat tuit={tuit} />
        </div>
      </div>
    </li>
  );
};

export default TuitItem;
