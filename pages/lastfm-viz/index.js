import Header from "../../components/header";
import Footer from "../../components/footer";
import RecentArtistsPanel from "../../components/recentArtistsPanel";
import SimilarArtistsPanel from "../../components/similarArtistsPanel";
import AlbumsPanel from "../../components/albumsPanel";
import { useState } from "react";

const LastFMPage = () => {
  const [shouldSearch, setShouldSearch] = useState(true);
  const [searchQuery, setSearchQuery] = useState("pleanut");

  const [selectedArtistForSimilar, setSelectedArtistForSimilar] = useState();
  const [similarArtistsLoading, setSimilarArtistsLoading] = useState(false);
  const [similarArtistsData, setSimilarArtistsData] = useState();

  const [selectedArtistForAlbums, setSelectedArtistForAlbums] = useState();
  const [albumsLoading, setAlbumsLoading] = useState();
  const [albumsData, setAlbumsData] = useState();

  const onSearchSubmit = query => {
    setSearchQuery(query);
    setShouldSearch(true);
    setSimilarArtistsData();
    setAlbumsData();
  };

  const onSearch = () => {
    setShouldSearch(false);
  };

  const onFetchingSimilarArtists = artist => {
    setSelectedArtistForSimilar(artist);
    setSimilarArtistsLoading(true);
  };

  const onFetchedSimilarArtists = fetched => {
    setSimilarArtistsLoading(false);
    setSimilarArtistsData(fetched);
  };

  const onFetchingAlbums = artist => {
    setAlbumsData();
    setSelectedArtistForAlbums(artist);
    setAlbumsLoading(true);
  };

  const onFetchedAlbums = fetched => {
    setAlbumsLoading(false);
    setAlbumsData(fetched);
  };

  return (
    <section className="grid">
      <Header onSearchSubmit={onSearchSubmit} />
      <section className="panels-container">
        <RecentArtistsPanel
          searchQuery={searchQuery}
          shouldSearch={shouldSearch}
          onSearch={onSearch}
          selectedArtistForSimilar={selectedArtistForSimilar}
          onFetchingSimilarArtists={onFetchingSimilarArtists}
          onFetchedSimilarArtists={onFetchedSimilarArtists}
        />
        <SimilarArtistsPanel
          selectedArtistForSimilar={selectedArtistForSimilar}
          selectedArtistForAlbums={selectedArtistForAlbums}
          data={similarArtistsData}
          loading={similarArtistsLoading}
          onFetchingAlbums={onFetchingAlbums}
          onFetchedAlbums={onFetchedAlbums}
        />
        <AlbumsPanel
          selectedArtist={selectedArtistForAlbums}
          loading={albumsLoading}
          data={albumsData}
        />
      </section>
      <Footer />
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-rows: 5vh 90vh 5vh;
        }

        header,
        footer {
          grid-column: 1 / 4;
        }

        .panels-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          align-items: flex-start;
        }
      `}</style>

      <style global jsx>{`
        body {
          height: 100vh;
        }
      `}</style>
    </section>
  );
};

export default LastFMPage;
