import ArtistSearch from "../../components/lastfm-viz/artistSearch";
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
      <ArtistSearch onFetchSimilarArtists={onFetchSimilarArtists} />
    </div>
  );
};

export default LastFMPage;
