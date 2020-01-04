import allQuotes from "../../static/quotes.json";
import {sample} from "lodash";

export default (req, res) => {
  const {author} = req.query;

  let quotes = allQuotes;

  if (author)
    quotes = quotes.filter(q =>
      q.author.toLowerCase().includes(author.toLowerCase())
    );
  if (!quotes.length)
    quotes = allQuotes.filter(q => q.author.toLowerCase() === "unknown");

  const quote = sample(quotes);

  res.status(200).json(quote);
};
