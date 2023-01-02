import { Restaurant } from "../models/Restaurant";
import "./RestaurantCard.css";
import { Link } from "react-router-dom";
import { SetStateAction } from "react";

export type CardProps = {
  restaurant: Restaurant;
  handleClick: React.Dispatch<SetStateAction<Restaurant>>;
};

export default function RestaurantCard({ restaurant, handleClick }: CardProps) {
  return (
    // <Link to={`/${restaurant.id}`} relative="path">

    <div className="cell medium-6 large-4 small-12">
      <Link
        to={`/search/restaurants/${restaurant.id}`}
        relative="path"
        onClick={() => handleClick({ ...restaurant })}
      >
        <div className="card">
          <img
            className="card-image"
            alt="resturant image placeholder"
            src={restaurant.imageURL}
          />
          <div className="card-section">
            <h1 className="card-title">
              <b>{restaurant.name}</b>
            </h1>
            <h2 className="rating">
              Rating: {restaurant.rating ? restaurant.rating : "n/a"}
            </h2>
            <h2 className="price">
              Price: {restaurant.price ? restaurant.price : "n/a"}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
