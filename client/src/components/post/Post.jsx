import { Link } from "react-router-dom";
import "./post.css";
import { baseurl } from "../../config";
export default function Post({ post }) {
  const PF = `${baseurl}/images/`;
  return (
    <div className="post">
      <div className="container">
        <div className="left">
          {post.photo && (
            <img className="postImg" src={PF + post.photo} alt="" />
          )}
          <span className="postTitle">
            <Link to={`/post/${post._id}`} className="link">
              {post.title}
            </Link>
          </span>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <div className="right">
          <Link to={`/post/${post._id}`} className="link">
            <p className="postDesc">{post.desc}</p>
          </Link>
        </div>
      </div>
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">
              {/* <Link className="link" to="/posts?cat=Music"> */}
              {c.name}
              {/* </Link> */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
