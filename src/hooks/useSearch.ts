import { useState, useEffect } from "react";
import { getRestaurants } from "./api/api";

export function useSearch(term: string, location: string) {
  const [restaurants, setRestaurants] = useState([]);
  const [searchParams, setSearchParams] = useState({
    term: term,
    location: location,
  });

  useEffect(() => {
    const fetchData = () => {
      try {
        getRestaurants(searchParams).then((res) => {
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
