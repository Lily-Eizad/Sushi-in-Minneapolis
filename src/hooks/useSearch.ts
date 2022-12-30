import { useState, useEffect } from "react";
import { SearchParams, getRestaurants } from "./api/api";

export function useSearch({ term, location }: SearchParams) {
  const [restaurants, setRestaurants] = useState([]);
  const [searchParams, setSearchParams] = useState({} as SearchParams);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getRestaurants({ term, location }).then((res) => {
          setRestaurants(res);
        });
      } catch (error) {
        console.log("Error fetching restaurants: ", error);
      }
    };
    fetchData();
  }, [searchParams]);

  return {
    restaurants,
    searchParams,
    setSearchParams,
  };
}
