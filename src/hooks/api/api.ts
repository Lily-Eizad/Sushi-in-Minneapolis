import { API_BASE_URL, BUSINESSES_PATH, BEARER_TOKEN } from "./config";
import queryString from "query-string";

export function getRestaurants(queryParams: SearchParams) {
  const query = queryString.stringify(queryParams);
  return fetch(`${API_BASE_URL}${BUSINESSES_PATH}?${query}`, {
    headers: {
      Autorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: "true",
    },
  }).then((res) => res.json());
}

export type SearchParams = {
  term: string;
  location: string;
};
