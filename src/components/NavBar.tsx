import "./NavBar.css";

export default function navbar() {
  return (
    <div className="nav-bar" id="example-menu">
      <title className="top-bar-left">ushi: Yelp but for sushi</title>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <input type="search" placeholder="Search" />
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
      </div>
    </div>
  );
}
