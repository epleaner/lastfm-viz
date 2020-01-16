import { useState, useEffect } from "react";
import { fetchSimilarArtists } from "../../api/lastfm";
import Anchor from "./anchor";
import Artist from "./artist";

const RecentArtist = props => {
  return (
    <Artist
      {...props}
      fetcher={fetchSimilarArtists}
      buttonName={"similar artists"}
      render={(data, url, name, playcount) => (
        <article>
          <Anchor href={url}>{name}</Anchor> ({playcount} plays)
        </article>
      )}
    />
  );
};

export default RecentArtist;
