import { useState, useEffect } from "react";
import { fetchTopAlbums } from "../../api/lastfm";
import Artist from "./artist";

const SimilarArtist = props => {
  return (
    <Artist
      {...props}
      fetcher={fetchTopAlbums}
      buttonName={"top albums"}
      render={(data, url, name, playcount) => (
        <article>
          <div>top albums? {data && data.length}</div>
          <a href={url}>
            <h1>{name}</h1>
          </a>
        </article>
      )}
    />
  );
};

export default SimilarArtist;
