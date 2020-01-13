import { useState, useEffect } from "react";
import { fetchTopAlbums } from "../../api/lastfm";

const SimilarArtist = props => {
  const { artistKey, url, name, playcount, mbid, onFetchTopAlbums } = props;

  const [loading, setLoading] = useState(false);
  const [shouldFetchTopAlbums, setShouldFetchTopAlbums] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  const { error, data } = fetchedData;

  useEffect(
    () => {
      const fetcher = async () => {
        if (shouldFetchTopAlbums) {
          setShouldFetchTopAlbums(false);
          setLoading(true);

          const fetchedTopAlbumsData = await fetchTopAlbums(name, mbid);

          setFetchedData(fetchedTopAlbumsData);
          onFetchTopAlbums(fetchedTopAlbumsData);
          setLoading(false);
        }
      };

      fetcher();
    },
    [shouldFetchTopAlbums]
  );

  return (
    <li key={artistKey}>
      <div>fetching? {loading ? "true" : "false"}</div>
      <div>error? {error && error.message}</div>
      <div>topAlbums? {data && data.length}</div>
      <a href={url}>
        <div>{name}</div>
      </a>
      <div>mbid: {mbid}</div>
      <button onClick={() => setShouldFetchTopAlbums(true)}>top albums</button>
    </li>
  );
};

export default SimilarArtist;
