import { describe, expect, test } from "@jest/globals";
import { Restaurant } from "../../models/Restaurant";
import { getParsedRestaurantsData } from "../../hooks/useSearch";
import { mockBusinesses } from "../mockData/MockBusinesses";

describe("getParsedRestaurantData tests", () => {
  test("should return correctly formatted Restaurant data", () => {
    const result = getParsedRestaurantsData(mockBusinesses);
    const expectedResult: Restaurant[] = [
      {
        id: mockBusinesses[0].id,
        name: mockBusinesses[0].name,
        imageURL: mockBusinesses[0].image_url,
        price: mockBusinesses[0].price,
        rating: mockBusinesses[0].rating,
        categories: mockBusinesses[0].categories.map(
          (c: Record<string, any>) => c.title
        ),
        isClosed: mockBusinesses[0].is_closed,
        phoneNumber: mockBusinesses[0].phone,
        reviewCount: mockBusinesses[0].review_count,
        transactions: mockBusinesses[0].transactions,
        address: mockBusinesses[0].location.display_address,
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});
