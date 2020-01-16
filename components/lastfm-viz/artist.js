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
    onFetching,
    onFetched,
    buttonName,
    render
  } = props;

  const [shouldFetch, setShouldFetch] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  const { error, data } = fetchedData;

  useEffect(
    () => {
      (async () => {
        if (shouldFetch) {
          setShouldFetch(false);
          onFetching();

          const fetched = await fetcher(name, mbid);

          setFetchedData(fetched);
          onFetched(fetched);
        }
      })();
    },
    [shouldFetch]
  );

  return (
    <li key={artistKey} onMouseEnter={onMouseEnter}>
      {render(data, url, name, playcount)}

      <button onClick={() => setShouldFetch(true)}>
        {buttonName} {">"}
      </button>

      <style jsx>{`
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;

        button:hover {
          text-decoration: underline;
        }
      `}</style>
    </li>
  );
};

export default Artist;
