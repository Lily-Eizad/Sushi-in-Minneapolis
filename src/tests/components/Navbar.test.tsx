import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "../../components/NavBar";

test("renders search button", () => {
  render(<Nav />);
  const searchButton = screen.getByTestId("search-button");
  expect(searchButton).toBeInTheDocument();
});
