import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
	const data = useRouteLoaderData("event-details");

	const event = data.event;
	return <EventItem event={event} />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
	const id = params.eventId;
	const response = await fetch("http://localhost:8080/events/" + id);

	if (!response.ok) {
		// return new Response(
		// 	JSON.stringify({ message: "Could not fetch data for selected event!" }),
		// 	{ status: 500 }
		// );

		throw json(
			{ message: "Could not fetch data for selected event!" },
			{ status: 500 }
		);
	} else {
		return response;
	}
}

export async function action({ request, params }) {
	const id = params.eventId;

	const response = await fetch("http://localhost:8080/events/" + id, {
		method: request.method,
	});

	if (!response.ok) {
		throw json({ message: "Could not delete the event!" }, { status: 500 });
	} else {
		return redirect("/events");
	}
}
