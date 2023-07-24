import React from "react";
import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

const EditEventPage = () => {
	const data = useRouteLoaderData("event-details");
	return <EventForm event={data.event} />;
};

export default EditEventPage;

// export async function action({ request, params }) {
// 	const id = params.eventId;

// 	const data = await request.formData();

// 	const eventData = {
// 		title: data.get("title"),
// 		image: data.get("image"),
// 		date: data.get("date"),
// 		description: data.get("description"),
// 	};

// 	const response = await fetch("http://localhost:8080/events" + id, {
// 		method: "patch",
// 		body: JSON.stringify(eventData),
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	});

// 	if (!response.ok) {
// 		throw json({ message: "Could not edit the event." }, { status: 500 });
// 	} else {
// 		return redirect("/events");
// 	}
// }
