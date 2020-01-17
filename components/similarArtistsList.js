import SimilarArtist from "./similarArtist";

const SimilarArtistsList = props => {
  const {
    artists,
    selectedArtistForAlbums,
    onFetchingAlbums,
    onFetchedAlbums
  } = props;

  return (
    <ul>
      {artists.map((artist, key) => (
        <SimilarArtist
          {...artist}
          key={key}
          artistKey={key}
          isSelected={selectedArtistForAlbums === artist.name}
          onFetching={onFetchingAlbums}
          onFetched={onFetchedAlbums}
        />
      ))}
    </ul>
  );
};

export default SimilarArtistsList;
