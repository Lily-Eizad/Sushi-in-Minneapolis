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
          <li className="has-form">
            <div className="row collapse">
              <div className="large-8 small-9 columns">
                <input type="text" placeholder="Find Stuff" />
              </div>
              <div className="large-4 small-3 columns">
                <a href="#" className="alert button expand">
                  Search
                </a>
              </div>
            </div>
          </li>
        </ul> */}
        <h1 className="nav-bar-title">All the sushi! in Minneapolis...</h1>
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
