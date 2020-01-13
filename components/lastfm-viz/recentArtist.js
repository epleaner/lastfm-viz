import { useState, useEffect } from "react";
import { fetchSimilarArtists } from "../../api/lastfm";
import Artist from "./artist";

const RecentArtist = props => {
  return (
    <Artist
      {...props}
      fetcher={fetchSimilarArtists}
      buttonName={"similar"}
      render={(data, url, name, playcount) => (
        <div>
          <div>similarArtists? {data && data.length}</div>
          <a href={url}>
            <div>
              {name} – {playcount} plays
            </div>
          </a>
        </div>
      )}
    />
  );
};

export default RecentArtist;
