import RecentArtistsList from "./recentArtistsList";
import useArtistFetch from "./artistFetch";

const RecentArtistsPanel = props => {
  const { artists, loading, error } = useArtistFetch();

  let content;

  if (loading) content = <span>Loading...</span>;
  else if (error) content = <span>Failed to fetch: ${error}</span>;
  else content = <RecentArtistsList artists={artists} {...props} />;

  return <section>{content}</section>;
};

export default RecentArtistsPanel;
