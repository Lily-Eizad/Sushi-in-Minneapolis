import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import RestaurantDetails from "./components/RestaurantDetails";
import { useApp } from "./hooks/useApp";
import NotFoundPage from "./components/404Page";

export default function App() {
  const { restaurants, infiniteScroll, fetchData, isError } = useApp();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/search/restaurants/:id" element={<RestaurantDetails />} />
        <Route
          path="/search/restaurants"
          element={
            <LandingPage
              restaurants={restaurants}
              infiniteScroll={infiniteScroll}
              fetchData={fetchData}
              isError={isError}
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
