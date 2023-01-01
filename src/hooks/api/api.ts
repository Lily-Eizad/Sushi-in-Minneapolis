import { API_BASE_URL, BEARER_TOKEN } from "./config";
import { SearchParams } from "../../models/Search";
//the below import is an exampel of the library i'd
//for the query string in a real world setting, which lets me easily scale the app
// import queryString from "query-string";

const PATH = "/businesses/search";

export async function getRestaurants(
  queryParams: SearchParams,
  offset: number
) {
  const query = `term=sushi&location=${queryParams.location}&offset=${offset}`;
  console.log("query: ", query);
  return await fetch(`${API_BASE_URL}${PATH}?${query}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: "true",
    },
  }).then((res) => res.json());
}
