import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Tech</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg" src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23174648/B-Tech-Degree.jpg"
              alt=""
      />
    </div>
  );
}
