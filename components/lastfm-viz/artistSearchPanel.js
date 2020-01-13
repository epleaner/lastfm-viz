import ArtistList from "./artistList";
import useArtistFetch from "./artistFetch";

const ArtistSearchPanel = props => {
  const { artists, loading, error } = useArtistFetch();
  if (loading) return <span>Loading...</span>;
  if (error) return <span>Failed to fetch: ${error}</span>;
  return <ArtistList artists={artists} {...props} />;
};

export default ArtistSearchPanel;
