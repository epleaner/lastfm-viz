import { useState, useEffect } from "react";
import { fetchSimilarArtists } from "../api/lastfm";

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
    isSelected,
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
          onFetching(name);

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
        {isSelected ? "⧕" : ">"}
      </button>
      <style jsx>{`
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;

        padding: 5px 0px;

        button {
          display: grid;
          justify-content: end;
          grid-template-columns: 35px;
        }

        button:hover {
          text-decoration: underline;
        }
      `}</style>
    </li>
  );
};

export default Artist;
