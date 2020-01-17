const Album = props => {
  const {
    artist: { name: artistName, url: artistUrl },
    image,
    name,
    playcount,
    url,
    coverOnly,
    onMouseOver
  } = props;

  const smallImageUrl = image[1]["#text"];

  if (coverOnly)
    if (smallImageUrl.length > 0)
      return (
        <li onMouseOver={onMouseOver}>
          <figure>
            <img src={smallImageUrl} alt={`${name} – ${artistName}`} />
          </figure>
        </li>
      );
    else return null;

  return (
    <li>
      <article>
        <a href={url}>{name}</a>{" "}
        <span className="playcount">({playcount} plays on lastfm)</span>
      </article>
      <style jsx>{`
        li {
          padding: 5px 0px;
        }

        article {
          display: grid;
          grid-template-rows: 20px auto;
        }

        .playcount {
          font-size: 12px;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </li>
  );
};

export default Album;
