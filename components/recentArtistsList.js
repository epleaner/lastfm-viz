import { useState } from "react";
import RecentArtist from "./recentArtist";

const RecentArtistsList = props => {
  const { artists, onFetchingSimilarArtists, onFetchedSimilarArtists } = props;

  return (
    <section>
      <ul>
        {artists.map((artist, key) => (
          <RecentArtist
            {...artist}
            key={key}
            artistKey={key}
            onFetching={onFetchingSimilarArtists}
            onFetched={onFetchedSimilarArtists}
          />
        ))}
      </ul>
    </section>
  );
};

export default RecentArtistsList;
