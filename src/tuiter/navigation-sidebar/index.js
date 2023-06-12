import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineBorderlessTable, AiFillBell, AiFillMail, AiFillPushpin, 
          AiOutlineUnorderedList, AiFillIdcard, AiOutlineEllipsis } from "react-icons/ai";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const styles = `
    .wd-icon {
      margin-right: 8px;
      font-size:20px;
    }
  `;
  
  return (
    <div className="list-group">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <Link to={"/tuiter/home "} className={`list-group-item ${active === "home" ? "active" : ""}`}>
        <AiFillHome className="wd-icon"/>
        <span className="d-none d-xl-inline">Home</span>
      </Link>
      <Link to={"/tuiter/explore "} className={`list-group-item ${active === "explore" ? "active" : ""}`}>
        <AiOutlineBorderlessTable className="wd-icon"/>
        <span className="d-none d-xl-inline">Explore</span>
      </Link>
      <Link to={"/tuiter/notifications "} className={`list-group-item ${active === "notifications" ? "active" : ""}`}>
        <AiFillBell className="wd-icon"/>
        <span className="d-none d-xl-inline">Notifications</span>
      </Link>
      <Link to={"/tuiter/messages "} className={`list-group-item ${active === "messages" ? "active" : ""}`}>
        <AiFillMail className="wd-icon"/>
        <span className="d-none d-xl-inline">Messages</span>
      </Link>
      <Link to={"/tuiter/bookmarks "} className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}>
        <AiFillPushpin className="wd-icon"/>
        <span className="d-none d-xl-inline">Bookmarks</span>
      </Link>
      <Link to={"/tuiter/lists "} className={`list-group-item ${active === "lists" ? "active" : ""}`}>
        <AiOutlineUnorderedList className="wd-icon"/>
        <span className="d-none d-xl-inline">Lists</span>
      </Link>
      <Link to={"/tuiter/profile "} className={`list-group-item ${active === "profile" ? "active" : ""}`}>
        <AiFillIdcard className="wd-icon"/>
        <span className="d-none d-xl-inline">Profile</span>
      </Link>
      <Link to={"/tuiter/more "} className={`list-group-item ${active === "more" ? "active" : ""}`}>
        <AiOutlineEllipsis className="wd-icon"/>
        <span className="d-none d-xl-inline">More</span>
      </Link>
      {!currentUser && <Link className="list-group-item" to="/tuiter/login">   <span className="d-none d-xl-inline">Login</span>  </Link>}
     {!currentUser && <Link className="list-group-item" to="/tuiter/register"><span className="d-none d-xl-inline">Register</span></Link>}
     { currentUser && <Link className="list-group-item" to="/tuiter/profile"> <span className="d-none d-xl-inline">Profile</span> </Link>}
    </div>
  );
};
export default NavigationSidebar;

