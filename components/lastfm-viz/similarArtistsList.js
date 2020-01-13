const SimilarArtistsList = props => {
  const { artists } = props;
  return <div>similar artists: {artists.length}</div>;
};

export default SimilarArtistsList;
