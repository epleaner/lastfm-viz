import { useState, useEffect } from "react";
import { fetchTopAlbums } from "../../api/lastfm";
import Anchor from "./anchor";
import Artist from "./artist";

const SimilarArtist = props => {
  return (
    <Artist
      {...props}
      fetcher={fetchTopAlbums}
      buttonName={"top albums"}
      render={(data, url, name, playcount) => (
        <article>
          <Anchor href={url}>{name}</Anchor>
        </article>
      )}
    />
  );
};

export default SimilarArtist;
