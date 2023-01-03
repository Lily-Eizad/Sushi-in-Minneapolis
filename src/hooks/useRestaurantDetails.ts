import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Restaurant } from "../models/Restaurant";
import { getRestaurantByID } from "./api/api";

export function useRestaurantDetails(bisID: string | undefined) {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Record<string, any>>();
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    try {
      setLoading(true);
      getRestaurantByID(bisID).then((res) => {
        setSelectedRestaurant(res);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log("Error fetching restaurant: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { selectedRestaurant, loading };
}
