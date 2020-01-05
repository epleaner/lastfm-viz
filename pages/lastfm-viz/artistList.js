import Artist from "./artist";

const ArtistList = props => {
  const { artists } = props;

  return (
    <ul>
      {artists.map((artist, key) => (
        <Artist {...artist} key={key} artistKey={key} />
      ))}
    </ul>
  );
};

export default ArtistList;
