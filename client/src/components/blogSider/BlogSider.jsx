import "./blogsider.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import { baseurl } from "../../config";
export default function BlogSider() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get(`${baseurl}/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);
  // return (
  //   // <div className="sidebar">
  //   //   <div className="sidebarItem">
  //   //     <span className="sidebarTitle">Check out my website and projects </span>
  //   //     <div className="sidebarSocial">
  //   //       <a href="http://avinash-kumar.netlify.com/">
  //   //         <img className="sidebarIcon" src="../images/portfolio.png" alt="" />
  //   //       </a>
  //   //       <a href="https://pokemon-eclipse.netlify.app/">
  //   //         <img className="sidebarIcon" src="../images/pokemon.png" alt="" />
  //   //       </a>
  //   //     </div>
  //   //   </div>
  //   // </div>
  // );
}
