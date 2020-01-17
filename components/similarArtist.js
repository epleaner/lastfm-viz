import { useState, useEffect } from "react";
import { fetchTopAlbums } from "../api/lastfm";
import Artist from "./artist";

const SimilarArtist = props => {
  return (
    <Artist
      {...props}
      fetcher={fetchTopAlbums}
      buttonName={"top albums"}
      render={(data, url, name, playcount) => (
        <article>
          <a href={url}>{name}</a>
          <style jsx>{`
            a:hover {
              text-decoration: underline;
            }
          `}</style>
        </article>
      )}
    />
  );
};

export default SimilarArtist;
