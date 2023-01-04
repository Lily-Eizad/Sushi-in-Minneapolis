import { useState, useEffect } from "react";
import { getMinneapolisSushiRestaurants } from "./api/api";
import { Restaurant } from "../models/Restaurant";
import { InfiniteScrollType } from "../models/InfiniteScroll";

//main hook for the App

export function useApp() {
  //data state
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isError, setIsError] = useState(false);
  //infinite scroll state
  const [infiniteScroll, setInfiniteScroll] = useState<InfiniteScrollType>({
    currentPage: 0,
    offset: 0,
    dataTotal: 0,
  });

  const fetchData = () => {
    try {
      getMinneapolisSushiRestaurants(infiniteScroll.offset).then((res) => {
        const parsedRestaurantsData = getParsedRestaurantsData(res.businesses);
        //handle if api returns empty array
        if (!res.businesses.length) {
          setIsError(true);
        }
        setRestaurants([...restaurants, ...parsedRestaurantsData]);
        setInfiniteScroll({
          currentPage: infiniteScroll.currentPage + 1,
          offset: infiniteScroll.offset + 20,
          dataTotal: res.total,
        });
      });
    } catch (error) {
      setIsError(true);
      console.log("Error fetching restaurants: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    restaurants,
    infiniteScroll,
    fetchData,
    isError,
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
      categories: b.categories.map((c: Record<string, any>) => c.title),
      isClosed: b.is_closed,
      phoneNumber: b.phone,
      address: b.location.display_address,
      reviewCount: b.review_count,
      transactions: b.transactions?.length ? b.transactions : ["n/a"],
    };
  });
}
