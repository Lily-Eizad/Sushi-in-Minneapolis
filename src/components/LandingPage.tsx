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

  // handle no results or empty results array
  if (!restaurants || !restaurants.length) {
    return (
      <div className="grid-container ">
        <div className="grid-x ">
          <div>Sorry, No results matched your search</div>
        </div>
      </div>
    );
  }

  //handle loading state
  // if(loading) {
  //   return (
  //   <div className="loading-spinner-grid-container grid-container">
  //     <div className="grid-x">
  //       <LoadingSpinner />
  //     </div>
  //   </div>
  //   )
  // }

  return (
    <div className="grid-container">
      <InfiniteScroll
        className="grid-x"
        pageStart={infiniteScroll.currentPage}
        loadMore={() => fetchData()}
        hasMore={restaurants.length < infiniteScroll.dataTotal ? true : false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {restaurants.map((r) => {
          return <RestaurantCard key={r.id} restaurant={r} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
