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
        <a href={url}>{name}</a> ({playcount} plays on lastfm)
      </article>
    </li>
  );
};

export default Album;
