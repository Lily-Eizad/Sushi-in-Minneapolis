import { API_BASE_URL, BEARER_TOKEN } from "./config";
// import queryString from "query-string";

const PATH = "/businesses/search";

export async function getRestaurants(queryParams: SearchParams) {
  const query = `term=${queryParams.term}&location=${queryParams.location}`;
  return await fetch(`${API_BASE_URL}${PATH}?${query}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: "true",
    },
  }).then((res) => res.json());
}

export type SearchParams = {
  term: string;
  location: string;
};
