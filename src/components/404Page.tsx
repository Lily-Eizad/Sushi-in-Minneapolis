import "./404Page.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found-page-wrapper">
      <h1>404 Not found</h1>
      <Link to={"/search/restaurants"}>Go home</Link>
    </div>
  );
}
