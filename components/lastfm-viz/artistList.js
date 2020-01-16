import { useState } from "react";
import RecentArtist from "./recentArtist";

const ArtistList = props => {
  const { artists, onFetchSimilarArtists } = props;
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
            onFetched={onFetchSimilarArtists}
          />
        ))}
      </ul>
    </section>
  );
};

export default ArtistList;
