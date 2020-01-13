import { useState } from "react";
import Artist from "./artist";

const ArtistList = props => {
  const { artists } = props;
  const [hoveredArtist, setHoveredArtist] = useState();

  const onMouseEnter = ({ name }) => () => {
    setHoveredArtist(name);
  };

  return (
    <div>
      <span>currently hovering over {hoveredArtist}</span>
      <ul>
        {artists.map((artist, key) => (
          <Artist
            {...artist}
            key={key}
            artistKey={key}
            onMouseEnter={onMouseEnter(artist)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
