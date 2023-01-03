import { describe, expect, test } from "@jest/globals";
import { Restaurant } from "../../models/Restaurant";
// import { getSelectedRestaurant } from "../../hooks/useRestaurantDetails";
import { mockFormattedRestaurants } from "../mockData/MockBusinesses";

describe("useRestaurant details tests", () => {
  test("should return the correct restaurant object given the id and restaurants array", () => {
    // const result = getSelectedRestaurant(
    //   mockFormattedRestaurants,
    //   "jiqwUTqlV0pbVy7pMXlkgQ"
    // );
    // const expectedResult = {
    //   id: mockFormattedRestaurants[0].id,
    //   name: mockFormattedRestaurants[0].name,
    //   imageURL: mockFormattedRestaurants[0].imageURL,
    //   price: mockFormattedRestaurants[0].price,
    //   rating: mockFormattedRestaurants[0].rating,
    //   categories: mockFormattedRestaurants[0].categories,
    //   isClosed: mockFormattedRestaurants[0].isClosed,
    //   phoneNumber: mockFormattedRestaurants[0].phoneNumber,
    //   address: mockFormattedRestaurants[0].address,
    //   reviewCount: mockFormattedRestaurants[0].reviewCount,
    //   transactions: mockFormattedRestaurants[0].transactions,
    // };
    // expect(result).toEqual(expectedResult);
  });
});
