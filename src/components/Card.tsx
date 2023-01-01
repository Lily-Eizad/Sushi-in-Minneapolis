import { Restaurant } from "../models/Restaurant";
import "./Card.css";

export type CardProps = {
  restaurant: Restaurant;
};

export default function card({ restaurant }: CardProps) {
  return (
    <div className="cell medium-6 large-4 small-12">
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
    </div>
  );
}
