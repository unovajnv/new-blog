import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";
import { baseurl } from "../../config";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
const PF = `${baseurl}/images/`;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a href="/">
          <i className="topIcon fab fa-github-square"></i>
        </a>
        <a href="/">
          {" "}
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/umesh-prajapati-90b029200/">
          {" "}
          <i className="topIcon fab fa-linkedin"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="toplink link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="toplink link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
