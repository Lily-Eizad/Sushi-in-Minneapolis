export default function navbar() {
  return (
    <div className="top-bar" id="example-menu">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">Logo</li>
        </ul>
      </div>
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
