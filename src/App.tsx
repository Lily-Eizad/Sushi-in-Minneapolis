import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import RestaurantPage from "./components/RestaurantPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route path="/restaurants" component={LandingPage} />
      </Switch>
    </>
  );
}
