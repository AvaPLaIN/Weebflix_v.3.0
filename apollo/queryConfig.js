export const airingAnimeConfig = {
  filterOptions: {
    page: 0,
    status: "ongoing",
  },
  querySelectors: `
    _id
    genres
    titleEng
    groupName
    description
    banner
    thumnail
  `,
};

export const movieAnimeConfig = {
  filterOptions: {
    page: 0,
    type: "movie",
  },
  querySelectors: `
    _id
    titleEng
    thumnail
  `,
};

export const shounenAnimeConfig = {
  filterOptions: {
    page: 0,
    genres: ["Shounen"],
  },
  querySelectors: `
    _id
    titleEng
    thumnail
  `,
};
