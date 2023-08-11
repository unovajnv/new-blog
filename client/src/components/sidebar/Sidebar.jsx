import { Link } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import { baseurl } from "../../config";
export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get(`${baseurl}/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img id="aboutImage" src="images/giphy.gif" alt="" />
        <p>
          Hello there, I am Umesh Prajapati and I believe that everyone is not
          equally talented or gifted but nobody is inferior either. I want to
          make a community of unique people and bring about a change in the
          world so that everyone sees each other as incomparable. A world of
          unique indviduals.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">Check out my website and projects </span>
        <div className="sidebarSocial">
          <a href="http://avinash-kumar.netlify.com/">
            <img className="sidebarIcon" src="images/portfolio.png" alt="" />
          </a>
          <a href="https://pokemon-eclipse.netlify.app/">
            <img className="sidebarIcon" src="images/pokemon.png" alt="" />
          </a>
        </div>
      </div> */}
    </div>
  );
}
