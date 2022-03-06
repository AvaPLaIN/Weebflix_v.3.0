// !--- IMPORTS ---!
//     * NEXT-JS MODULES

//     * REACT-JS MODULES
import { useState } from "react";

//     * STYLE-COMPONENTS
import { EpisodesContainer } from "./Episodes.styles";

//     * COMPONENTS

//     * STATES

//     * HOOKS

//     * SERVICES (GRAPHQL, APOLLO, ...)

//     * NPM-PACKAGES
import InfiniteScroll from "react-infinite-scroll-component";

//     * UTILS

//     * REACT-ICONS

//     * ASSETS

//     * STATIC-CONFIG

// !--- COMPONENT ---!
const Episodes = ({ episodes }) => {
  //     * INIT

  //     * STATES
  const [limitedEpisodes, setLimitedEpisodes] = useState(episodes.slice(0, 20));

  //     * HOOKS

  //     * DATA-FETCHING

  //     * HANDLERS
  const handleAddMoreEpisodes = () =>
    setLimitedEpisodes(episodes?.slice(0, limitedEpisodes.length + 15));

  //     * EVENT-LISTENERS

  // !--- RENDER ---!
  return (
    <EpisodesContainer>
      <div id="episodes-scroll-container">
        <InfiniteScroll
          dataLength={limitedEpisodes?.length}
          next={handleAddMoreEpisodes}
          hasMore={limitedEpisodes.length < episodes.length}
          loader="Loading"
          scrollableTarget="episodes-scroll-container"
        >
          {limitedEpisodes?.map((episode, index) => (
            <div className="episode" key={index}>
              <p>Episode {index + 1}</p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </EpisodesContainer>
  );
};

export default Episodes;
