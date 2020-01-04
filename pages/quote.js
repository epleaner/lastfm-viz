import {useRouter} from "next/router";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Quote = () => {
  const {query} = useRouter();
  const {data, error} = useSWR(
    `api/quote${query.author ? "?author=" + query.author : ""}`,
    fetcher
  );

  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = "Loading...";
  if (error) quote = `Failed to fetch the quote: ${error}`;

  return (
    <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}

      <style jsx>
        {`
          main {
            width: 90%;
            margin: 300px auto;
            text-align: center;
          }
        `}
      </style>
    </main>
  );
};

export default Quote;
