import "./NavBar.css";

export default function navbar() {
  return (
    <div role="navigation" className="nav-bar">
      <div className="top-bar-left">
        <img
          alt={"site logo placeholder"}
          className={"logo-image"}
          src={"https://cdn-icons-png.flaticon.com/512/3014/3014482.png"}
        />
        <h1 className="nav-bar-title">All the sushi! in Minneapolis...</h1>
      </div>
    </div>
  );
}
