import "./App.css";
import InfiniteScroll from "react-infinite-scroller";
import Navbar from "./components/NavBar";
import Card from "./components/Card";
import { useSearch } from "./hooks/useSearch";

export default function App() {
  const { restaurants, infiniteScroll, fetchData } = useSearch("Ann Arbor");

  console.log("restaunts length ", restaurants.length);
  console.log(restaurants);
  console.log("currentPage: ", infiniteScroll.currentPage);

  // handle no results or empty results array
  if (!restaurants || !restaurants.length) {
    <div className="grid-container ">
      <div className="grid-x ">
        <div>Sorry, No results matched your search</div>
      </div>
    </div>;
  }

  return (
    <>
      <Navbar />
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
            return <Card key={r.id} restaurant={r} />;
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}
