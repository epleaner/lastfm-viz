const Artist = props => {
  const { artistKey, url, name, playcount } = props;

  return (
    <li key={artistKey}>
      <a href={url}>
        <span>{name}</span> – <span>{playcount} plays</span>
      </a>
    </li>
  );
};

export default Artist;
