import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
export default function App() {
  return (
    <>
      <Header />
      <div className="grid-container ">
        <div className="grid-x ">
          <div className="cell medium-6 large-4 small-12">
            <Article />
          </div>
          <div className="cell  medium-6 large-4 small-12">
            <Article />
          </div>
          <div className="cell  medium-6 large-4 small-12">
            <Article />
          </div>
        </div>
      </div>
    </>
  );
}
