import Link from "next/link";

const PostLink = props => {
  const {id, name} = props;

  return (
    <li>
      <Link href="/blog/[id]" as={`/blog/${id}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export default PostLink;
