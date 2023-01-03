import "./RestaurantDetails.css";
import { Restaurant } from "../models/Restaurant";
import { useSearch } from "../hooks/useSearch";
import { useRestaurantDetails } from "../hooks/useRestaurantDetails";
import LoadingSpinner from "./LoadingSpinner";

export type RestaurantDetailsProps = {
  selectedRestaurant: Restaurant;
};

export default function RestaurantDetails() {
  const { restaurants } = useSearch();
  const { selectedRestaurant } = useRestaurantDetails(restaurants);

  if (!selectedRestaurant) {
    return <LoadingSpinner />;
  }

  console.log("selected res ", selectedRestaurant);

  return (
    <div className="cell medium-6 large-4 small-12">
      <div className="restaurant-details-panel">
        <ul className="details-table">
          <li>
            <h1>{selectedRestaurant?.name}</h1>
          </li>
          <li>
            {selectedRestaurant?.categories?.map((category) => {
              return <span> {category} |</span>;
            })}
          </li>
          <li>
            <h2>Price: {selectedRestaurant?.price}</h2>
          </li>
          <li>
            <h2>Rating: {selectedRestaurant?.rating}</h2>
          </li>
          <li>
            <h3>
              {selectedRestaurant?.isClosed
                ? "Currently Closed"
                : "Currently Open"}
            </h3>
          </li>
          <li>
            <h3>Phone number: {selectedRestaurant?.phoneNumber}</h3>
          </li>
          <li>
            {" "}
            Address:
            {selectedRestaurant?.address?.map((field) => {
              return <h3>{field}</h3>;
            })}
          </li>
          {selectedRestaurant?.transactions && (
            <li>
              Transactions:{" "}
              {selectedRestaurant?.transactions?.map((t) => {
                return <span>{t}</span>;
              })}
            </li>
          )}
          <li>
            <h3>Review Count: {selectedRestaurant?.reviewCount}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
