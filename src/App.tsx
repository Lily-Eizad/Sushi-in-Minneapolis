import "./App.css";
import Navbar from "./components/NavBar";
import Card from "./components/Card";
import { useSearch } from "./hooks/useSearch";

export default function App() {
  const { restaurants, searchParams } = useSearch("burgers", "berlin");

  console.log(restaurants);

  return (
    <>
      <Navbar />
      <div className="grid-container ">
        <div className="grid-x ">
          <div className="cell medium-6 large-4 small-12">
            <Card />
          </div>
          <div className="cell  medium-6 large-4 small-12">
            <Card />
          </div>
          <div className="cell  medium-6 large-4 small-12">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
