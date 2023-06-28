const calculateSummary = (transactionsList, currentMonth) => {
	const filteredTransactions = transactionsList.filter((transaction) => {
		const transactionDate = new Date(transaction.date);
		return transactionDate.getMonth() === currentMonth;
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

export default calculateSummary;
