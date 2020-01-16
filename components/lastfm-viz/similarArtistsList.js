import SimilarArtist from "./similarArtist";

const SimilarArtistsList = props => {
  const { artists, onFetchAlbums } = props;

  return (
    <ul>
      {artists.map((artist, key) => (
        <SimilarArtist
          {...artist}
          key={key}
          artistKey={key}
          onFetched={onFetchAlbums}
        />
      ))}
    </ul>
  );
};

export default SimilarArtistsList;
