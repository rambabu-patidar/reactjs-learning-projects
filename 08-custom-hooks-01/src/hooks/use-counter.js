import { useEffect, useState } from "react";

const useCounter = (increments = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (increments) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [increments]);

	return counter;
};

export default useCounter;
