import { API_BASE_URL, BEARER_TOKEN } from "./config";
import queryString from "query-string";

export function get(path: string, queryParams: SearchParams) {
  const query = queryString.stringify(queryParams);
  return fetch(`${API_BASE_URL}${path}?${query}`, {
    headers: {
      Autorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: "true",
    },
  });
}

export type SearchParams = {
  term: string;
  location: string;
};
