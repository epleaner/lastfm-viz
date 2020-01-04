import {useRouter} from "next/router";
import Layout from "../../components/layout";
import fetch from "isomorphic-unfetch";

const Post = props => {
  const router = useRouter();
  const {show} = props;

  const summary = show.summary.replace(/<[/]?[pb]>/g, "");

  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{summary}</p>
      <img src={show.image.medium} />
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const {id} = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return {show};
};

export default Post;
