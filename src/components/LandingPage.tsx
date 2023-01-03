import "./LandingPage.css";
import InfiniteScroll from "react-infinite-scroller";
import RestaurantCard from "./RestaurantCard";
import LoadingSpinner from "./LoadingSpinner";
import { Restaurant } from "../models/Restaurant";
import { InfiniteScrollType } from "../models/InfiniteScroll";

export type LandingPageProps = {
  restaurants: Restaurant[];
  infiniteScroll: InfiniteScrollType;
  fetchData: () => void;
  isError: boolean;
};

export default function LandingPage({
  restaurants,
  infiniteScroll,
  fetchData,
  isError,
}: LandingPageProps) {
  console.log("restaunts length ", restaurants.length);
  console.log(restaurants);
  console.log("currentPage: ", infiniteScroll.currentPage);

  if (!restaurants.length) {
    return <LoadingSpinner />;
  }

  if (!restaurants || isError) {
    return (
      <div className="grid-x">
        <div className="error-div">
          <h1>Sorry, unable to retrieve sushi restaurants in Minneapolis</h1>
        </div>
      </div>
    );
  }

  return (
    // <div className="grid-container">
    <InfiniteScroll
      className="grid-x"
      pageStart={infiniteScroll.currentPage}
      loadMore={() => fetchData()}
      hasMore={restaurants.length < infiniteScroll.dataTotal ? true : false}
      loader={<LoadingSpinner key={"k"} />}
    >
      {restaurants.map((r) => {
        return <RestaurantCard key={r.id} restaurant={r} />;
      })}
    </InfiniteScroll>
    // </div>
  );
}
