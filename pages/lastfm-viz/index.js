import ArtistSearchPanel from "../../components/lastfm-viz/artistSearchPanel";
import SelectedArtistPanel from "../../components/lastfm-viz/selectedArtistPanel";
import { useState } from "react";

const LastFMPage = () => {
  const [artistFetchedData, setArtistFetchedData] = useState();

  const onFetchSimilarArtists = fetchedData => {
    setArtistFetchedData(fetchedData);
  };

  return (
    <div>
      <SelectedArtistPanel artistFetchedData={artistFetchedData} />
      <ArtistSearchPanel onFetchSimilarArtists={onFetchSimilarArtists} />
    </div>
  );
};

export default LastFMPage;
