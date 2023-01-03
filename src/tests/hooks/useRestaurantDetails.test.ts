import { describe, expect, test } from "@jest/globals";
import { Restaurant } from "../../models/Restaurant";
import { getSelectedRestaurant } from "../../hooks/useRestaurantDetails";
import {
  mockBusinesses,
  mockFormattedRestaurants,
} from "../mockData/MockBusinesses";

describe("useRestaurant details tests", () => {
  test("should return the correct restaurant object given the id and restaurants array", () => {
    const result = getSelectedRestaurant(
      mockFormattedRestaurants,
      "jiqwUTqlV0pbVy7pMXlkgQ"
    );
    const expectedResult: Restaurant[] = [
      {
        id: mockBusinesses[0].id,
        name: mockBusinesses[0].name,
        imageURL: mockBusinesses[0].image_url,
        price: mockBusinesses[0].price,
        rating: mockBusinesses[0].rating,
        categories: mockBusinesses[0].categories,
        isClosed: mockBusinesses[0].isClosed,
        phoneNumber: mockBusinesses[0].phoneNumber,
        address: mockBusinesses[0].display_address,
        reviewCount: mockBusinesses[0].review_count,
        transactions: mockBusinesses[0].transactions,
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});
