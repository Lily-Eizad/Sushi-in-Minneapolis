import "./App.css";
import Navbar from "./components/NavBar";
import Card from "./components/Card";
import { useSearch } from "./hooks/useSearch";

export default function App() {
  const { restaurants, searchParams } = useSearch("new york");

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
        <div className="grid-x">
          {restaurants.map((r) => {
            return <Card key={r.id} restaurant={r} />;
          })}
        </div>
      </div>
    </>
  );
}
