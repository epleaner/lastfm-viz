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
    <section className="column-list">
      <ArtistSearchPanel onFetchSimilarArtists={onFetchSimilarArtists} />
      <SelectedArtistPanel artistFetchedData={artistFetchedData} />
      <AlbumsPanel />

      <style jsx>{`
        .column-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          align-items: flex-start;
        }
      `}</style>
    </section>
  );
};

export default LastFMPage;
