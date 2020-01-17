import SimilarArtist from "./similarArtist";

const SimilarArtistsList = props => {
  const { artists, onFetchingAlbums, onFetchedAlbums } = props;

  return (
    <ul>
      {artists.map((artist, key) => (
        <SimilarArtist
          {...artist}
          key={key}
          artistKey={key}
          onFetching={onFetchingAlbums}
          onFetched={onFetchedAlbums}
        />
      ))}
    </ul>
  );
};

export default SimilarArtistsList;
