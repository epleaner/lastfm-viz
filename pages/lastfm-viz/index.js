import ArtistList from "../../components/lastfm-viz/artistList";
import useArtistFetch from "../../components/lastfm-viz/artistFetch";

const LastFMPage = () => {
  const { artists, loading, error } = useArtistFetch();
  if (loading) return <span>Loading...</span>;
  if (error) return <span>Failed to fetch: ${error}</span>;

  return <ArtistList artists={artists} />;
};

export default LastFMPage;
