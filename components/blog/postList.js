import PostLink from "./postLink";

const PostList = props => {
  const {shows} = props;

  return (
    <ul>
      {shows.map(show => (
        <PostLink key={show.id} id={show.id} name={show.name} />
      ))}
      <style jsx>
        {`
          li {
            list-style: none;
            margin: 5px 0;
          }
        `}
      </style>
    </ul>
  );
};

export default PostList;
