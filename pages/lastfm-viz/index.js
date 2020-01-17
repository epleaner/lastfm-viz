import RecentArtistsPanel from "../../components/recentArtistsPanel";
import SimilarArtistsPanel from "../../components/similarArtistsPanel";
import AlbumsPanel from "../../components/albumsPanel";
import { useState } from "react";

const LastFMPage = () => {
  const [similarArtistsLoading, setSimilarArtistsLoading] = useState(false);
  const [similarArtistsData, setSimilarArtistsData] = useState();

  const [albumsLoading, setAlbumsLoading] = useState();
  const [albumsData, setAlbumsData] = useState();

  const onFetchingSimilarArtists = () => {
    setSimilarArtistsLoading(true);
  };

  const onFetchedSimilarArtists = fetched => {
    setSimilarArtistsLoading(false);
    setSimilarArtistsData(fetched);
  };

  const onFetchingAlbums = () => {
    setAlbumsLoading(true);
  };

  const onFetchedAlbums = fetched => {
    setAlbumsLoading(false);
    setAlbumsData(fetched);
  };

  return (
    <section>
      <RecentArtistsPanel
        onFetchingSimilarArtists={onFetchingSimilarArtists}
        onFetchedSimilarArtists={onFetchedSimilarArtists}
      />
      <SimilarArtistsPanel
        data={similarArtistsData}
        loading={similarArtistsLoading}
        onFetchingAlbums={onFetchingAlbums}
        onFetchedAlbums={onFetchedAlbums}
      />
      <AlbumsPanel loading={albumsLoading} data={albumsData} />

      <style jsx>{`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        align-items: flex-start;
      `}</style>
    </section>
  );
};

export default LastFMPage;
