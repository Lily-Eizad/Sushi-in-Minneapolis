import { Restaurant } from "../models/Restaurant";
import "./LoadingSpinner.css";

export type CardProps = {
  restaurant: Restaurant;
};

export default function LoadingSpinner() {
  return (
    <div className="cell">
      <h1>Loading...</h1>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
}
