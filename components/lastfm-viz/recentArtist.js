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
        <article>
          <a href={url}>
            <h1>{name}</h1>
          </a>
          <h2>{playcount} plays</h2>
        </article>
      )}
    />
  );
};

export default RecentArtist;
