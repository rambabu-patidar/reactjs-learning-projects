import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
	const chartDataPoints = [
		{ label: "Jan", val: 0 },
		{ label: "Feb", val: 0 },
		{ label: "Mar", val: 0 },
		{ label: "Apr", val: 0 },
		{ label: "May", val: 0 },
		{ label: "Jun", val: 0 },
		{ label: "Jul", val: 0 },
		{ label: "Aug", val: 0 },
		{ label: "Sep", val: 0 },
		{ label: "Oct", val: 0 },
		{ label: "Nov", val: 0 },
		{ label: "Dec", val: 0 },
	];

	for (const expense of props.expenses) {
		const expenseMonth = expense.date.getMonth(); // 0 for january
		chartDataPoints[expenseMonth].val += expense.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
