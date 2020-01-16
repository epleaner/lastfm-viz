import { useState } from "react";
import RecentArtist from "./recentArtist";
import List from "./list";

const RecentArtistsList = props => {
  const {
    artists,
    user,
    onFetchingSimilarArtists,
    onFetchedSimilarArtists
  } = props;
  const [hoveredArtist, setHoveredArtist] = useState();

  const onMouseEnter = ({ name }) => () => {
    setHoveredArtist(name);
  };

  return (
    <section>
      <h1>this week's listening for {user}</h1>
      <List>
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
      </List>
    </section>
  );
};

export default RecentArtistsList;
