import { describe, expect, test } from "@jest/globals";
import {
  getMinneapolisSushiRestaurants,
  getRestaurantByID,
} from "../../hooks/api/api";
import { mockBusinesses } from "../mockData/MockBusinesses";

describe("search API test", () => {
  let results = false;
  test("should return data object with businesses array", async () => {
    await getMinneapolisSushiRestaurants(0).then((response) => {
      if (Array.isArray(response.businesses) === true) results = true;
      expect(results).toBeTruthy();
    });
  });
});

describe("getRestaurantbyId API test", () => {
  let results = false;
  test("should return data object", async () => {
    await getRestaurantByID(mockBusinesses[0].id).then((response) => {
      if (response.hasOwnProperty("id") === true) results = true;
      expect(results).toBeTruthy();
    });
  });
});
