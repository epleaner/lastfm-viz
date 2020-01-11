import SimilarArtistFetch from "../../components/lastfm-viz/similarArtistFetch";

const Artist = props => {
  const { artistKey, url, name, playcount, mbid, onMouseEnter } = props;

  const fetchSimilarArtists = () => {
    SimilarArtistFetch.fetchSimilar(mbid);
  };

  return (
    <li key={artistKey} onMouseEnter={onMouseEnter}>
      <a href={url}>
        <span>{name}</span> – <span>{playcount} plays</span>
      </a>
      <button onClick={fetchSimilarArtists}>similar</button>
    </li>
  );
};

export default Artist;
