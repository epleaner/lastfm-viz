import SimilarArtist from "./similarArtist";
import List from "./list";

const SimilarArtistsList = props => {
  const { artists, onFetchingAlbums, onFetchedAlbums } = props;

  return (
    <List>
      {artists.map((artist, key) => (
        <SimilarArtist
          {...artist}
          key={key}
          artistKey={key}
          onFetching={onFetchingAlbums}
          onFetched={onFetchedAlbums}
        />
      ))}
    </List>
  );
};

export default SimilarArtistsList;
