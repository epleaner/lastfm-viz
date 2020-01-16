import { useState } from "react";
import RecentArtist from "./recentArtist";

const RecentArtistsList = props => {
  const { artists, onFetchingSimilarArtists, onFetchedSimilarArtists } = props;
  const [hoveredArtist, setHoveredArtist] = useState();

  const onMouseEnter = ({ name }) => () => {
    setHoveredArtist(name);
  };

  return (
    <section>
      <span>currently hovering over {hoveredArtist}</span>
      <ul>
        {artists.map((artist, key) => (
          <RecentArtist
            {...artist}
            key={key}
            artistKey={key}
            onMouseEnter={onMouseEnter(artist)}
            onFetching={onFetchingSimilarArtists}
            onFetched={onFetchedSimilarArtists}
          />
        ))}
      </ul>
    </section>
  );
};

export default RecentArtistsList;
