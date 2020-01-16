import ArtistSearchPanel from "../../components/lastfm-viz/artistSearchPanel";
import SelectedArtistPanel from "../../components/lastfm-viz/selectedArtistPanel";
import AlbumsPanel from "../../components/lastfm-viz/albumsPanel";
import { useState } from "react";

const LastFMPage = () => {
  const [artistFetchedData, setArtistFetchedData] = useState();

  const onFetchSimilarArtists = fetchedData => {
    setArtistFetchedData(fetchedData);
  };

  return (
    <div>
      <AlbumsPanel />
      <SelectedArtistPanel artistFetchedData={artistFetchedData} />
      <ArtistSearchPanel onFetchSimilarArtists={onFetchSimilarArtists} />
    </div>
  );
};

export default LastFMPage;
