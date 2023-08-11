import BlogSider from "../../components/blogSider/BlogSider";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <BlogSider />
    </div>
  );
}
