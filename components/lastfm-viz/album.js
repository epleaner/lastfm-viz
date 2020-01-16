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
        <h1>
          <a href={url}>{name}</a>
        </h1>
      </article>
    </li>
  );
};

export default Album;
