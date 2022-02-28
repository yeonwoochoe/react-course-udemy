import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";

import Component from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Component />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
