import "./LandingPage.css";
import InfiniteScroll from "react-infinite-scroller";
import RestaurantCard from "./RestaurantCard";
import LoadingSpinner from "./LoadingSpinner";
import { useSearch } from "../hooks/useSearch";

// export type LandingPageProps = {
//   restaurants: Restaurant[];
//   infiniteScroll: InfiniteScrollType;
//   fetchData: () => void;
//   setSelectedRestaurant: React.Dispatch<SetStateAction<Restaurant>>;
// };

export default function LandingPage() {
  const { restaurants, infiniteScroll, fetchData } = useSearch();

  console.log("restaunts length ", restaurants.length);
  console.log(restaurants);
  console.log("currentPage: ", infiniteScroll.currentPage);

  if (!restaurants || !restaurants.length) {
    return <LoadingSpinner />;
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
