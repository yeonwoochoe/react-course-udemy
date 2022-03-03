import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Component from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is fun!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  console.log(match);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Component />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
