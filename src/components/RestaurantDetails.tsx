import "./RestaurantDetails.css";
import { Restaurant } from "../models/Restaurant";

export type RestaurantDetailsProps = {
  selectedRestaurant: Restaurant;
};

export default function RestaurantDetails({
  selectedRestaurant,
}: RestaurantDetailsProps) {
  console.log("selected res ", selectedRestaurant);

  return (
    <div className="cell medium-6 large-4 small-12">
      <div className="restaurant-details-panel">
        <ul className="pricing-table">
          <li className="title">Standard</li>
          <li className="price">$99.99</li>
          <li className="description">An awesome description</li>
          <li className="bullet-item">1 Database</li>
          <li className="bullet-item">5GB Storage</li>
          <li className="bullet-item">20 Users</li>
        </ul>
      </div>
    </div>
  );
}
