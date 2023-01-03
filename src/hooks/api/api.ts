import { API_BASE_URL, BEARER_TOKEN } from "./config";

const PATH = "/businesses/search";

export async function getRestaurants(offset: number) {
  const query = `term=sushi&location=Minneapolis&offset=${offset}`;
  console.log("query: ", query);
  return await fetch(`${API_BASE_URL}${PATH}?${query}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: "true",
    },
  }).then((res) => res.json());
}
