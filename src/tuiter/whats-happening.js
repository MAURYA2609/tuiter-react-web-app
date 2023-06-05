import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile, BsFillGiftFill } from "react-icons/bs";
import { BsCalendarFill } from "react-icons/bs";
import { BiBold, BiItalic } from "react-icons/bi";
import {createTuit} from "./tuits/tuits-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuit(newTuit));
    setWhatsHappening("");
  };
  const iconStyles = `
    .wd-icon-wh {
      font-size : 25px;
    }
  `;
  return (
    <div className="row">
      <div className="col-auto">
        <img src="/images/maurya.jpg" className="rounded-circle" width={60} alt="Profile" />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <style dangerouslySetInnerHTML={{ __html: iconStyles }} />
            <AiOutlinePicture className="me-3 wd-icon-wh" />
            <BsFillGiftFill className="me-3 wd-icon-wh" />
            <MdFormatListBulleted className="me-3 wd-icon-wh" />
            <BsEmojiSmile className="me-3 wd-icon-wh" />
            <BsCalendarFill className="me-3 wd-icon-wh" />
            <HiOutlineLocationMarker className="me-3 wd-icon-wh" />
            <BiBold className="me-3 wd-icon-wh" />
            <BiItalic className="me-3 wd-icon-wh" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};

export default WhatsHappening;
