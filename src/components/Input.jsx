import Add from "../assets/images/plus.png";
import { useState } from "react";

const Input = ({ handleAdd }) => {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [isExpanse, setExpanse] = useState(false);
	const [date, setDate] = useState("");

	const generateID = () => Math.round(Math.random() * 1000);

	const handleSave = () => {
		if (!title || !amount) {
			alert("Informe o título e o valor da transação!");
			return;
		} else if (amount < 1) {
			alert("Informe um valor maior que zero!");
			return;
		}

		const transaction = {
			id: generateID(),
			title: title,
			amount: amount,
			expanse: isExpanse,
			date: date,
		};

		handleAdd(transaction);
		setTitle("");
		setAmount("");
	};

	return (
		<section className="flex items-end justify-between w-[90%] mt-[10%] w-complete grid-input">
			<div className="label-container w-1/5 min-w-min A">
				<label className="label-title" htmlFor="dateInput">
					Data
				</label>
				<input
					type="date"
					id="dateInput"
					name="dateInput"
					value={date}
					onChange={(e) => setDate(e.target.value)}
					className="outline-none border border-solid border-secondary rounded p-1 bg-transparent flex flex-row-reverse gap-2 text-white text-center hover:animation-brightness"
				/>
			</div>

			<div className="label-container w-1/5 w-div B">
				<label className="label-title" htmlFor="titleInput">
					Título
				</label>
				<input
					type="text"
					id="titleInput"
					name="titleInput"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="outline-none border border-solid border-secondary rounded p-1 bg-transparent text-white hover:animation-brightness"
				/>
			</div>

			<div className="label-container w-1/5 w-div C">
				<label className="label-title" htmlFor="valueInput">
					Valor
				</label>
				<input
					type="number"
					id="valueInput"
					name="valueInput"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					className="outline-none border border-solid border-secondary rounded p-1 bg-transparent text-white hover:animation-brightness"
				/>
			</div>

			<ul className="text-white w-1/5 D">
				<li className="w-full">
					<div className="flex items-center pl-3">
						<input
							type="radio"
							id="rIncome"
							name="transaction"
							defaultChecked
							onChange={() => setExpanse(!isExpanse)}
							className="radio w-4 h-4 checked:bg-green-500"
						/>

						<label
							htmlFor="rIncome"
							className="font-medium text-base text-gray-300 ml-2 mr-2"
						>
							Entrada
						</label>
					</div>
				</li>

				<li className="w-full border-gray-600 ">
					<div className="flex items-center pl-3">
						<input
							type="radio"
							id="rExpanse"
							name="transaction"
							onChange={() => setExpanse(!isExpanse)}
							className="radio w-4 h-4 checked:bg-red-500"
						/>
						<label
							htmlFor="rExpanse"
							className="font-medium text-base text-gray-300 ml-2 "
						>
							Saída
						</label>
					</div>
				</li>
			</ul>

			<button
				className="border border-solid border-secondary rounded p-3 mt-10 hover:animation-brightness add-btn E"
				onClick={handleSave}
			>
				<img src={Add} alt="Adicionar" />
			</button>
		</section>
	);
};

export default Input;
