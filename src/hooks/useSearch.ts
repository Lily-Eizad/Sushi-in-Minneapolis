import { parse } from "path";
import { useState, useEffect } from "react";
import { getRestaurants } from "./api/api";

export function useSearch(term: string, location: string) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchParams, setSearchParams] = useState({
    term: term,
    location: location,
  });

  useEffect(() => {
    const fetchData = () => {
      try {
        getRestaurants(searchParams).then((res) => {
          const parsedRestaurants: Restaurant[] = res.businesses.map(
            (b: Record<string, any>) => {
              return {
                id: b.id,
                name: b.name,
                imageURL: b.image_url,
              };
            }
          );
          setRestaurants(parsedRestaurants);
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

export type Restaurant = {
  id: string;
  name: string;
  imageURL: string;
};
