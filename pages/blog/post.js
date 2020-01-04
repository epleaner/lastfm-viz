import {useRouter} from "next/router";
import withLayout from "../../components/layout";

const Post = () => {
  const router = useRouter();
  const title = router.query.title;

  return (
    <div>
      <h1>{title}</h1>
      <p>post</p>
    </div>
  );
};

export default withLayout(Post);
