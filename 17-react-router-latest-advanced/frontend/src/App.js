import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
	loader as eventDetailLoader,
	action as deleteEventAction,
} from "./pages/EventDetail";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";

// Done this section till lecture number 35. Go ahead and have a good experience of this section
// its important and useful.
const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ":eventId",
						id: "event-details",
						loader: eventDetailLoader,

						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteEventAction,
							},
							{
								path: "edit",
								element: <EditEventPage />,
							},
						],
					},
					{ path: "new", element: <NewEventPage />, action: newEventAction },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
