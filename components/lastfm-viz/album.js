import Anchor from "./anchor";

const Album = props => {
  const {
    artist: { name: artistName, url: artistUrl },
    image,
    name,
    playcount,
    url
  } = props;

  return (
    <li>
      <article>
        <Anchor href={url}>{name}</Anchor> ({playcount} plays on lastfm)
      </article>
    </li>
  );
};

export default Album;
