import React from "react";
import { FaRegComment, FaRetweet, FaHeart, FaRegHeart} from "react-icons/fa";
import { FiShare } from "react-icons/fi";

const TuitStat = ({
  tuit = {
    _id: 123,
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
  },
}) => {
  return (
    <li className="list-group-item border-0 mt-1">
      <div className="row">
        <div className="col-3">
          <span className="fw-bolder">
            <FaRegComment />
          </span>{" "}
          {tuit.replies}
        </div>
        <div className="col-3">
          <span className="fw-bolder">
            <FaRetweet /> 
          </span>{" "}
          {tuit.retuits}
        </div>
        <div className="col-3">
          <span className="fw-bolder">
            {tuit.liked ? <FaHeart /> : <FaRegHeart />}
          </span>{" "}
          {tuit.likes}
        </div>
        <div className="col-3">
          <span>
            <FiShare />
          </span>
        </div>
      </div>
    </li>
  );
};

export default TuitStat;
