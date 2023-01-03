import { API_BASE_URL, BEARER_TOKEN } from "./config";

const BUSINESSES_BY_LOCATOIN_PATH = "/businesses/search";
const BUSINESSES_BY_ID_PATH = "/businesses";

export async function getMinneapolisSushiRestaurants(offset: number) {
  const query = `term=sushi&location=Minneapolis&offset=${offset}`;
  return await fetch(`${API_BASE_URL}${BUSINESSES_BY_LOCATOIN_PATH}?${query}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: "true",
    },
  }).then((res) => res.json());
}

export async function getRestaurantByID(bisId: string | undefined) {
  return await fetch(`${API_BASE_URL}${BUSINESSES_BY_ID_PATH}/${bisId}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: "true",
    },
  }).then((res) => res.json());
}
