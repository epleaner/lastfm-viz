import RecentArtistsPanel from "../../components/lastfm-viz/recentArtistsPanel";
import SimilarArtistsPanel from "../../components/lastfm-viz/similarArtistsPanel";
import AlbumsPanel from "../../components/lastfm-viz/albumsPanel";
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

      <style global jsx>{`
        /*** typography ***/
        html {
          font-size: 1px;
        }

        body {
          font-size: 16rem;
          font-weight: 400;
          line-height: 3;
          color: #000;
          margin: 5vh 5vw;
        }

        /*** resets ***/

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        button {
          background-color: transparent;
          color: inherit;
          border-width: 0;
          padding: 0;
          cursor: pointer;
        }
        figure {
          margin: 0;
        }
        input::-moz-focus-inner {
          border: 0;
          padding: 0;
          margin: 0;
        }
        ul,
        ol,
        dd {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }
        p {
          margin: 0;
        }
        cite {
          font-style: normal;
        }
        fieldset {
          border-width: 0;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default LastFMPage;
