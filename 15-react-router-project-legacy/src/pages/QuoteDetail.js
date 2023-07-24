import React, { Fragment, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
	const params = useParams();

	const { quoteId } = params;

	const {
		sendRequest,
		status,
		error,
		data: loadedQuote,
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [quoteId, sendRequest]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered">{error}</p>;
	}

	if (!loadedQuote.text) {
		return <NoQuotesFound />;
	}

	return (
		<Fragment>
			<HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />

			<Routes>
				<Route
					path=""
					element={
						<div className="centered">
							<Link className="btn--flat" to="comments">
								Load Comments
							</Link>
						</div>
					}
				/>
				<Route path="comments" element={<Comments />} />
			</Routes>
		</Fragment>
	);
};

export default QuoteDetail;
