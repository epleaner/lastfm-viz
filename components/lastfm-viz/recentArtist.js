import { useState, useEffect } from "react";
import { fetchSimilarArtists } from "../../api/lastfm";
import Artist from "./artist";

const RecentArtist = props => {
  return (
    <Artist
      {...props}
      fetcher={fetchSimilarArtists}
      buttonName={"similar artists"}
      render={(data, url, name, playcount) => (
        <article>
          <a href={url}>{name}</a> ({playcount} plays)
        </article>
      )}
    />
  );
};

export default RecentArtist;
