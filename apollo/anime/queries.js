import { gql } from "@apollo/client";
import client from "../config";

export const getAnimePageList = async ({ filterOptions, querySelectors }) => {
  let queryFilterOptions = ``;

  for (const [key, value] of Object.entries(filterOptions)) {
    if (typeof value === "undefined") continue;
    if (typeof value === "string") {
      queryFilterOptions += `${key}: "${value}", `;
      continue;
    }
    if (typeof value === "number") {
      queryFilterOptions += `${key}: ${value}, `;
      continue;
    }
    if (Array.isArray(value))
      queryFilterOptions += `${key}: [${value.map(
        (element) => `"${element}"`
      )}], `;
  }

  return await client.query({
    query: gql`
      query Animes {
        animes(${queryFilterOptions}) {
          ${querySelectors}
        }
      }
    `,
  });
};
