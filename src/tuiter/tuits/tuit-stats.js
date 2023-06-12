import React from "react";
import { FaRegComment, FaRetweet, FaHeart, FaThumbsDown } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStat = ({
  tuit = {
    _id: 123,
    liked: true,
    unliked:false,
    replies: 123,
    retuits: 432,
    likes: 2345,
  },
}) => {
  const dispatch = useDispatch();
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
        <div className="col-5 d-flex align-items-center">
          <FaHeart
            className="text-danger me-2"
            onClick={() =>
              dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
            }
          />
          <span>{tuit.likes}</span>
          <FaThumbsDown
            className="text-primary me-2"
            onClick={() =>
              dispatch(
                updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 })
              )
            }
          />
          <span>{tuit.dislikes}</span>
        </div>
        <div className="col-1 d-flex align-items-center">
          <span>
            <FiShare />
          </span>
        </div>
      </div>
    </li>
  );
};

export default TuitStat;
