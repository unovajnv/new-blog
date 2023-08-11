import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">A community of like minded individuals.</span>
        <span className="headerTitleLg">THOUGHT<b>SHARE</b></span>
      </div>
      <img
        className="headerImg"
        src="images/wallpaper.jpg"
        alt="A laptop workspace"
      />
    </div>
  );
}
