import Input from "../components/Input";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";
import Table from "../components/Table";
import {
	calculateSummary,
	getFilteredTransactions,
	useTransactions,
} from "../data/data";

import { useState } from "react";

const Card = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	const {
		transactionsList,
		setTransactionsList,
		currentMonth,
		setCurrentMonth,
	} = useTransactions();

	const { income, expanse, total } = calculateSummary(
		transactionsList,
		currentMonth,
		currentYear,
	);

	const filteredTransactions = getFilteredTransactions(
		transactionsList,
		currentMonth,
		currentYear,
	);

	const handleAdd = (transaction) => {
		const newArrayTransactions = [...transactionsList, transaction];
		setTransactionsList(newArrayTransactions);
	};

	const handleDelete = (id) => {
		const newArray = transactionsList.filter(
			(transaction) => transaction.id !== id,
		);
		setTransactionsList(newArray);
	};

	return (
		<main className="card">
			<NavBar />
			<div className="flex justify-center">
				<Resume
					income={income}
					expanse={expanse}
					total={total}
					currentMonth={currentMonth}
					setCurrentMonth={setCurrentMonth}
					currentYear={currentYear}
					setCurrentYear={setCurrentYear}
				/>
			</div>
			<div className="flex justify-center">
				<Input handleAdd={handleAdd} />
			</div>

			<div className="flex justify-center">
				<Table
					items={filteredTransactions}
					handleDelete={handleDelete}
					currentMonth={currentMonth}
					currentYear={currentYear}
				/>
			</div>
		</main>
	);
};

export default Card;
