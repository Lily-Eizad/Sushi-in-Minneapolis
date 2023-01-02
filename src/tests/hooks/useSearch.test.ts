import { describe, expect, test } from "@jest/globals";
import { Restaurant } from "../../models/Restaurant";
import { getParsedRestaurantsData } from "../../hooks/useSearch";
import { mockBusinesses } from "../mockData/MockBusinesses";

describe("getParsedRestaurantData", () => {
  test("should return correctly formatted Restaurant data", () => {
    const result = getParsedRestaurantsData(mockBusinesses);
    const expectedResult: Restaurant[] = [
      {
        id: mockBusinesses[0].id,
        name: mockBusinesses[0].name,
        imageURL: mockBusinesses[0].image_url,
        price: mockBusinesses[0].price,
        rating: mockBusinesses[0].rating,
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});
