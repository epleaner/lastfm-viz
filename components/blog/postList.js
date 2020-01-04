import PostLink from "./postLink";

const PostList = props => {
  const {shows} = props;

  return (
    <ul>
      {shows.map(show => (
        <PostLink key={show.id} id={show.id} name={show.name} />
      ))}
    </ul>
  );
};

export default PostList;
