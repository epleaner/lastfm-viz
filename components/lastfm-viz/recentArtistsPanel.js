import RecentArtistsList from "./recentArtistsList";
import AsyncPanel from "./asyncPanel";
import { fetchUsersWeeklyCharts } from "../../api/lastfm";

import { useState, useEffect } from "react";

const RecentArtistsPanel = props => {
  const [searchQuery, setSearchQuery] = useState("pleanut");
  const [shouldSearch, setShouldSearch] = useState(true);
  const [loading, setLoading] = useState(false);

  const [fetchedData, setFetchedData] = useState();

  useEffect(
    () => {
      (async () => {
        if (shouldSearch) {
          setShouldSearch(false);
          setLoading(true);

          const fetched = await fetchUsersWeeklyCharts(searchQuery);

          setFetchedData(fetched);
          setLoading(false);
        }
      })();
    },
    [shouldSearch]
  );

  return (
    <section>
      <form onSubmit={e => e.preventDefault() || setShouldSearch(true)}>
        <input
          type="text"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button type="submit">search</button>
      </form>
      {fetchedData || loading ? (
        <AsyncPanel
          {...props}
          data={fetchedData}
          loading={loading}
          render={(data, otherProps) => (
            <RecentArtistsList
              user={searchQuery}
              artists={data}
              {...otherProps}
            />
          )}
        />
      ) : (
        <span>Search for a user to see their weekly charts</span>
      )}
    </section>
  );
};

export default RecentArtistsPanel;
