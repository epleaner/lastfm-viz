import {useRouter} from "next/router";
import Layout from "../../components/layout";

const Post = () => {
  const router = useRouter();
  const title = router.query.title;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>post</p>
    </Layout>
  );
};

export default Post;
