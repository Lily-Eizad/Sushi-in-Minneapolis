import { useState, useEffect } from "react";
import { getRestaurants } from "./api/api";
import { Restaurant } from "../models/Restaurant";

export function useSearch(location: string) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  //I could simply pass a string for location as a default state instead
  //of an object, but i'd use this model in a real world setting for scaling
  const [searchParams, setSearchParams] = useState({
    location: location,
  });

  useEffect(() => {
    const fetchData = () => {
      try {
        getRestaurants(searchParams).then((res) => {
          console.log(res);
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
      price: b.price,
      rating: b.rating,
    };
  });
}
