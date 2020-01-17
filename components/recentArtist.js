import { useState, useEffect } from "react";
import { fetchSimilarArtists } from "../api/lastfm";
import Artist from "./artist";

const RecentArtist = props => {
  return (
    <Artist
      {...props}
      fetcher={fetchSimilarArtists}
      buttonName={"similar artists"}
      render={(data, url, name, playcount) => (
        <article>
          <a href={url}>{name}</a>
          <span className="playcount">({playcount} plays)</span>
          <style jsx>{`
            display: grid;
            grid-template-rows: 20px auto;

            .playcount {
              font-size: 12px;
            }

            a:hover {
              text-decoration: underline;
            }
          `}</style>
        </article>
      )}
    />
  );
};

export default RecentArtist;
