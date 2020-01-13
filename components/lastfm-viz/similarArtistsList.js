import SimilarArtist from "./similarArtist";

const SimilarArtistsList = props => {
  const { artists } = props;
  const onFetchTopAlbums = () => {
    console.log("top albums fetched from similar artists list");
  };

  return (
    <ul>
      {artists.slice(0, 3).map((artist, key) => (
        <SimilarArtist
          {...artist}
          key={key}
          artistKey={key}
          onFetched={onFetchTopAlbums}
        />
      ))}
    </ul>
  );
};

export default SimilarArtistsList;
