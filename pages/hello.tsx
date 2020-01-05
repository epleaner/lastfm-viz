import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string | undefined }> = ({ userAgent }) =>
  <span>hi - user agent: {userAgent}</span>;

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
}

export default Home;
