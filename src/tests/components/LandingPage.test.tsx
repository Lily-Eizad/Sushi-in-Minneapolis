import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "../../components/LandingPage";
import { mockFormattedRestaurants } from "../mockData/MockRestaurantData";
import { mockInfiniteScrollState } from "../mockData/MockStates";
import { BrowserRouter as Router } from "react-router-dom";

describe("Test LandingPage with normal state", () => {
  test("Verify that it renders cards ", async () => {
    const { getByTestId } = render(
      <Router>
        <LandingPage
          restaurants={mockFormattedRestaurants}
          infiniteScroll={mockInfiniteScrollState}
          fetchData={() => {}}
          isError={false}
        />
      </Router>
    );

    const card = getByTestId("testRestaurantCards");
    expect(card).toBeInTheDocument();
  });
});

describe("Test LandingPage with error state", () => {
  test("Verify that it renders error div ", async () => {
    const { getByTestId } = render(
      <Router>
        <LandingPage
          restaurants={mockFormattedRestaurants}
          infiniteScroll={mockInfiniteScrollState}
          fetchData={() => {}}
          isError={true}
        />
      </Router>
    );

    const card = getByTestId("testErrorState");
    expect(card).toBeInTheDocument();
  });
});

describe("Test LandingPage with loading state", () => {
  test("Verify that it renders loading spinner ", async () => {
    const { getByTestId } = render(
      <Router>
        <LandingPage
          restaurants={[]}
          infiniteScroll={mockInfiniteScrollState}
          fetchData={() => {}}
          isError={false}
        />
      </Router>
    );

    const card = getByTestId("testLoading");
    expect(card).toBeInTheDocument();
  });
});
