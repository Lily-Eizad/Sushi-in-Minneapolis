import "./LandingPage.css";
import InfiniteScroll from "react-infinite-scroller";
import RestaurantCard from "./RestaurantCard";
import { useSearch } from "../hooks/useSearch";
import LoadingSpinner from "./LoadingSpinner";

export default function LandingPage() {
  const { restaurants, infiniteScroll, fetchData } = useSearch("Minneapolis");

  console.log("restaunts length ", restaurants.length);
  console.log(restaurants);
  console.log("currentPage: ", infiniteScroll.currentPage);

  if (!restaurants || !restaurants.length) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid-container">
      <InfiniteScroll
        className="grid-x"
        pageStart={infiniteScroll.currentPage}
        loadMore={() => fetchData()}
        hasMore={restaurants.length < infiniteScroll.dataTotal ? true : false}
        loader={<LoadingSpinner />}
      >
        {restaurants.map((r) => {
          return <RestaurantCard key={r.id} restaurant={r} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
