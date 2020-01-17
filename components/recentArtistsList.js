import { useState } from "react";
import RecentArtist from "./recentArtist";

const RecentArtistsList = props => {
  const {
    artists,
    selectedArtistForSimilar,
    onFetchingSimilarArtists,
    onFetchedSimilarArtists
  } = props;

  return (
    <section>
      <ul>
        {artists.map((artist, key) => (
          <RecentArtist
            {...artist}
            key={key}
            artistKey={key}
            isSelected={selectedArtistForSimilar === artist.name}
            onFetching={onFetchingSimilarArtists}
            onFetched={onFetchedSimilarArtists}
          />
        ))}
      </ul>
    </section>
  );
};

export default RecentArtistsList;
