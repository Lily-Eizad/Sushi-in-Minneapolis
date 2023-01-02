import { useState, useEffect } from "react";
import { getRestaurants } from "./api/api";
import { Restaurant } from "../models/Restaurant";
import { SearchParams } from "../models/Search";

export function useSearch(location: string) {
  //data state
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  //infinite scroll state
  const [infiniteScroll, setInfiniteScroll] = useState({
    currentPage: 0,
    offset: 0,
    dataTotal: 0,
  });

  //I could simply pass a string for location as a default state instead
  //of an object, but i'd use this model in a real world setting for scaling
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: location,
  });

  const fetchData = () => {
    try {
      getRestaurants(searchParams, infiniteScroll.offset).then((res) => {
        console.log(res);
        const parsedRestaurantsData = getParsedRestaurantsData(res.businesses);
        setRestaurants([...restaurants, ...parsedRestaurantsData]);
        setInfiniteScroll({
          currentPage: infiniteScroll.currentPage + 1,
          offset: infiniteScroll.offset + 20,
          dataTotal: res.total,
        });
      });
    } catch (error) {
      console.log("Error fetching restaurants: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  return {
    restaurants,
    searchParams,
    infiniteScroll,
    fetchData,
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
