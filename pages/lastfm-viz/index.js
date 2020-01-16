import RecentArtistsPanel from "../../components/lastfm-viz/recentArtistsPanel";
import SimilarArtistsPanel from "../../components/lastfm-viz/similarArtistsPanel";
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
    <section>
      <RecentArtistsPanel onFetchSimilarArtists={onFetchSimilarArtists} />
      <SimilarArtistsPanel
        data={similarArtistData}
        onFetchAlbums={onFetchAlbums}
      />
      <AlbumsPanel data={albumsData} />

      <style jsx>{`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        align-items: flex-start;
      `}</style>
    </section>
  );
};

export default LastFMPage;
