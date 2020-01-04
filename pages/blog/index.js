import Layout from "../../components/layout";
import PostList from "../../components/blog/postList";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const Blog = props => (
  <Layout>
    <h1>blog page</h1>
    <PostList shows={props.shows} />
  </Layout>
);

Blog.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show) || []
  };
};

export default Blog;
