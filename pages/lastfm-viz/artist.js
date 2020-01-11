import { useState, useEffect } from "react";
import SimilarArtistFetch from "../../components/lastfm-viz/similarArtistFetch";

const Artist = props => {
  const { artistKey, url, name, playcount, mbid, onMouseEnter } = props;

  const [loading, setLoading] = useState(false);
  const [shouldFetchSimilar, setShouldFetchSimilar] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  const { error, similarArtists } = fetchedData;

  useEffect(
    () => {
      const fetcher = async () => {
        if (shouldFetchSimilar) {
          setShouldFetchSimilar(false);
          setLoading(true);
          const fetchedSimilarArtistData = await SimilarArtistFetch.fetchSimilar(
            name,
            mbid
          );

          setFetchedData(fetchedSimilarArtistData);
          setLoading(false);
        }
      };

      fetcher();
    },
    [shouldFetchSimilar]
  );

  return (
    <li key={artistKey} onMouseEnter={onMouseEnter}>
      <div>fetching? {loading ? "true" : "false"}</div>
      <div>error? {error && error.message}</div>
      <div>similarArtists? {similarArtists && similarArtists.length}</div>
      <a href={url}>
        <div>
          {name} – {playcount} plays
        </div>
      </a>
      <div>mbid: {mbid}</div>
      <button onClick={() => setShouldFetchSimilar(true)}>similar</button>
    </li>
  );
};

export default Artist;
