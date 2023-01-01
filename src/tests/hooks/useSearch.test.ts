import { describe, expect, test } from "@jest/globals";
import { Restaurant } from "../../models/Restaurant";
import { getParsedRestaurantsData } from "../../hooks/useSearch";

describe("GetParsedRestaurantData", () => {
  test("should returnc correctly formatted Restaurant data", () => {
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

const mockBusinesses: Record<string, any>[] = [
  {
    alias: "the-burger-stand-at-taos-ale-house-taos-9",
    categories: [
      { alias: "burgers", title: "Burgers" },
      { alias: "pubs", title: "Pubs" },
      { alias: "tradamerican", title: "American (Traditional)" },
    ],
    coordinates: { latitude: 36.4123230987101, longitude: -105.568650326926 },
    display_phone: "(575) 758-5522",
    distance: 2797.3863773438893,
    id: "jiqwUTqlV0pbVy7pMXlkgQ",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/hzXemwJ8OOF3RrQUmIRrxA/o.jpg",
    is_closed: false,
    location: {
      address1: "401 Paseo Del Pueblo Norte",
      address2: null,
      address3: "",
      city: "Taos",
      country: "US",
      display_address: ["401 Paseo Del Pueblo Norte", "Taos, NM 87571"],
      state: "NM",
      zip_code: "87571",
    },
    name: "The Burger Stand at Taos Ale House",
    phone: "+15757585522",
    price: "$$",
    rating: 4,
    review_count: 365,
    transactions: ["pickup"],
    url: "https://www.yelp.com/biz/the-burger-stand-at-taos-ale-house-taos-9",
  },
];
