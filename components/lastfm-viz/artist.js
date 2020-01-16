import { useState, useEffect } from "react";
import { fetchSimilarArtists } from "../../api/lastfm";

const Artist = props => {
  const {
    artistKey,
    url,
    name,
    playcount,
    mbid,
    onMouseEnter,
    fetcher,
    onFetched,
    buttonName,
    render
  } = props;

  const [loading, setLoading] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  const { error, data } = fetchedData;

  useEffect(
    () => {
      (async () => {
        if (shouldFetch) {
          setShouldFetch(false);
          setLoading(true);
          const fetched = await fetcher(name, mbid);

          setFetchedData(fetched);
          onFetched(fetched);
          setLoading(false);
        }
      })();
    },
    [shouldFetch]
  );

  return (
    <li key={artistKey} onMouseEnter={onMouseEnter}>
      {render(data, url, name, playcount)}

      <button onClick={() => setShouldFetch(true)}>{buttonName}</button>
    </li>
  );
};

export default Artist;
