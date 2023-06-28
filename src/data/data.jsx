import { useEffect, useState } from "react";

export const calculateSummary = (
	transactionsList,
	currentMonth,
	currentYear,
) => {
	const filteredTransactions = transactionsList.filter((transaction) => {
		const transactionDate = new Date(transaction.date);
		return (
			transactionDate.getMonth() === currentMonth &&
			transactionDate.getFullYear() === currentYear
		);
	});

	const amountExpanse = filteredTransactions
		.filter((item) => item.expanse)
		.map((transaction) => Number(transaction.amount));

	const amountIncome = filteredTransactions
		.filter((item) => !item.expanse)
		.map((transaction) => Number(transaction.amount));

	const expanse = amountExpanse.reduce((acc, curr) => acc + curr, 0).toFixed(2);

	const income = amountIncome.reduce((acc, curr) => acc + curr, 0).toFixed(2);
	const total = Math.abs(income - expanse).toFixed(2);

	return {
		income: `${income} R$`,
		expanse: `${expanse} R$`,
		total: `${Number(income) < Number(expanse) ? "-" : ""} ${total} R$`,
	};
};

export const getFilteredTransactions = (
	transactionsList,
	currentMonth,
	currentYear,
) => {
	return transactionsList.filter((transaction) => {
		const transactionDate = new Date(transaction.date);
		return (
			transactionDate.getMonth() === currentMonth &&
			transactionDate.getFullYear() === currentYear
		);
	});
};

export const useTransactions = () => {
	const data = localStorage.getItem("transactions");

	const [transactionsList, setTransactionsList] = useState(
		data ? JSON.parse(data) : [],
	);

	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

	useEffect(() => {
		localStorage.setItem("transactions", JSON.stringify(transactionsList));
	}, [transactionsList]);

	return {
		transactionsList,
		setTransactionsList,
		currentMonth,
		setCurrentMonth,
	};
};

export const labels = [
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
