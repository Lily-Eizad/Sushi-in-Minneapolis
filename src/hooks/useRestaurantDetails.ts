import { useParams } from "react-router-dom";
import { Restaurant } from "../models/Restaurant";

export function useRestaurantDetails(restaurants: Restaurant[]) {
  const { id } = useParams();

  const selectedRestaurant = getSelectedRestaurant(restaurants, id);

  return { selectedRestaurant };
}

export function getSelectedRestaurant(
  restaurants: Restaurant[],
  id: string | undefined
): Restaurant | undefined {
  return restaurants.find((r) => r.id === id);
}
