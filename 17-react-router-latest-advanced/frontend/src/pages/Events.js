import React from "react";
import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
	const data = useLoaderData();

	// if (data.isError) {
	// 	return <p>{data.message}</p>;
	// }

	const events = data.events;

	// That means: we can use useLoaderData() in the element that's assigned to a route AND in all
	// components that might be used inside that element.

	return <EventsList events={events} />;
};

export default EventsPage;

export async function loader() {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		// return { isError: true, message: "Couldn't fetch the data!" };
		// throw new Error("Could not fetch events!");

		// throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
		// 	status: 500,
		// });

		// making our own responses in the above way is not good so the react router team provides us
		// a simple function so that we haven't need to create it manually and don't have to worry about
		// parsing data and stringify data.

		throw json({ message: "Could not fetch events" }, { status: 500 });
	} else {
		return response;
	}
}
