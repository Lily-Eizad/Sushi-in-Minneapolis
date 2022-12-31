import { parse } from "path";
import { useState, useEffect } from "react";
import { getRestaurants } from "./api/api";
import { Restaurant } from "../models/Restaurant";

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
          // console.log(res.businesses);
          const parsedRestaurantsData = getParsedRestaurantsData(
            res.businesses
          );
          setRestaurants(parsedRestaurantsData);
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

export function getParsedRestaurantsData(
  data: Record<string, any>[]
): Restaurant[] {
  return data.map((b: Record<string, any>) => {
    return {
      id: b.id,
      name: b.name,
      imageURL: b.image_url,
    };
  });
}
