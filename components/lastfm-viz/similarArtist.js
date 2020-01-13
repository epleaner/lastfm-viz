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
        <div>
          <div>top albums? {data && data.length}</div>
          <a href={url}>
            <div>{name}</div>
          </a>
        </div>
      )}
    />
  );
};

export default SimilarArtist;
