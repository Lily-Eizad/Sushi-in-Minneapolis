import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import RestaurantDetails from "./components/RestaurantDetails";
import { useSearch } from "./hooks/useSearch";

export default function App() {
  const { restaurants, infiniteScroll, fetchData } = useSearch();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/search/restaurants/:id" element={<RestaurantDetails />} />
        <Route
          path="/search/restaurants"
          element={
            <LandingPage
              restaurants={restaurants}
              infiniteScroll={infiniteScroll}
              fetchData={fetchData}
            />
          }
        />
        <Route
          path="/"
          element={<Navigate to="/search/restaurants" replace />}
        />
      </Routes>
    </>
  );
}
