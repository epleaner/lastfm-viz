import RecentArtistsList from "./recentArtistsList";
import AsyncPanel from "./asyncPanel";
import { fetchUsersWeeklyCharts } from "../api/lastfm";

import { useState, useEffect } from "react";

const RecentArtistsPanel = props => {
  const { searchQuery, shouldSearch, onSearch } = props;
  const [loading, setLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState();

  useEffect(
    () => {
      (async () => {
        if (shouldSearch) {
          onSearch();
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
      {fetchedData || loading ? (
        <AsyncPanel
          {...props}
          data={fetchedData}
          loading={loading}
          header={<h1>this week's listening for {searchQuery}</h1>}
          body={(data, otherProps) => (
            <RecentArtistsList artists={data} {...otherProps} />
          )}
        />
      ) : (
        <span>Search for a user to see their weekly charts</span>
      )}
    </section>
  );
};

export default RecentArtistsPanel;
