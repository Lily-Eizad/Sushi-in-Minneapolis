import "./NavBar.css";

export default function navbar() {
  return (
    <div className="nav-bar" id="example-menu">
      <div className="top-bar-left">
        <img
          alt={"site logo placeholder"}
          className={"logo-image"}
          src={"https://cdn-icons-png.flaticon.com/512/3014/3014482.png"}
        />
        {/* <ul className="menu">
          <li className="search-input-li-wrapper">
            <label className="search-label">
              Search sushi restaurants in Minneapolis
            </label>
            <input
              className="search-input"
              type="search"
              placeholder="Sushi restaurants in Minneapolis..."
            />
          </li>
        </ul> */}
        {/* <h1 className="nav-bar-title">Sushi restaurants in Minneapolis...</h1> */}
      </div>
      {/* <div className="top-bar-right">
        <ul className="menu">
          <li className="search-input-li-wrapper">
            <input
              className="search-input"
              type="search"
              placeholder="Search sushi restaurants in Minneapolis..."
            />
          </li>
          <li>
            <button
              data-testid="search-button"
              type="button"
              className="button"
            >
              Search
            </button>
          </li>
        </ul>
      </div> */}
      {/* <div className="empty-div"></div> */}
    </div>
  );
}
