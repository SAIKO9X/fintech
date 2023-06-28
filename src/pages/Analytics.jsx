import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

const Analytics = () => {
	const transactionsList = JSON.parse(localStorage.getItem("transactions"));
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	const calculateTotalAmount = (transactions, isExpense) => {
		return transactions.reduce((total, transaction) => {
			if (isExpense === transaction.expanse) {
				return total + Number(transaction.amount);
			}
			return total;
		}, 0);
	};

	const labels = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];

	const data = {
		labels,
		datasets: [
			{
				label: "Lucro",
				data: labels.map((month, index) => {
					const filteredTransactions = transactionsList.filter(
						(transaction) => {
							const transactionYear = new Date(transaction.date).getFullYear();
							return (
								transactionYear === currentYear &&
								new Date(transaction.date).getMonth() === index
							);
						},
					);
					return calculateTotalAmount(filteredTransactions, false);
				}),
				backgroundColor: "rgba(2, 177, 90, 0.5)",
			},
			{
				label: "Despesa",
				data: labels.map((month, index) => {
					const filteredTransactions = transactionsList.filter(
						(transaction) => {
							const transactionYear = new Date(transaction.date).getFullYear();
							return (
								transactionYear === currentYear &&
								new Date(transaction.date).getMonth() === index
							);
						},
					);
					return calculateTotalAmount(filteredTransactions, true);
				}),
				backgroundColor: "rgba(255, 0, 0, 0.5)",
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Gráfico de Lucro e Despesa",
				padding: 15,
			},
		},
	};

	return (
		<main className="card">
			<div className="flex justify-between mb-4">
				<button
					className="analytics-btn"
					onClick={() => setCurrentYear((prevYear) => prevYear - 1)}
				>
					Ano Anterior
				</button>

				<h2 className="text-xl font-bold">Ano: {currentYear}</h2>

				<button
					className="analytics-btn"
					onClick={() => setCurrentYear((prevYear) => prevYear + 1)}
				>
					Próximo Ano
				</button>
			</div>
			<Bar options={options} data={data} />
		</main>
	);
};

export default Analytics;
