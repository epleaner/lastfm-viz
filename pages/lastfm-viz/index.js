import ArtistSearchPanel from "../../components/lastfm-viz/artistSearchPanel";
import SelectedArtistPanel from "../../components/lastfm-viz/selectedArtistPanel";
import AlbumsPanel from "../../components/lastfm-viz/albumsPanel";
import { useState } from "react";

const LastFMPage = () => {
  const [similarArtistData, setSimilarArtistData] = useState();
  const [albumsData, setAlbumsData] = useState();

  const onFetchSimilarArtists = fetched => {
    setSimilarArtistData(fetched);
  };

  const onFetchAlbums = fetched => {
    setAlbumsData(fetched);
  };

  return (
    <section className="column-list">
      <ArtistSearchPanel onFetchSimilarArtists={onFetchSimilarArtists} />
      <SelectedArtistPanel
        data={similarArtistData}
        onFetchAlbums={onFetchAlbums}
      />
      <AlbumsPanel data={albumsData} />

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
