import ResumeItem from "./ResumeItem";
import left from "../assets/images/left.png";
import right from "../assets/images/right.png";

const Resume = ({
	income,
	expanse,
	total,
	setCurrentMonth,
	currentMonth,
	setCurrentYear,
}) => {
	const handlePrevMonth = () => {
		if (currentMonth === 0) {
			setCurrentMonth(11);
			setCurrentYear((prevYear) => prevYear - 1);
		} else {
			setCurrentMonth((prevMonth) => prevMonth - 1);
		}
	};

	const handleNextMonth = () => {
		if (currentMonth === 11) {
			setCurrentMonth(0);
			setCurrentYear((prevYear) => prevYear + 1);
		} else {
			setCurrentMonth((prevMonth) => prevMonth + 1);
		}
	};

	const formatCurrentMonth = (currentMonth) => {
		const monthNames = [
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
		return monthNames[currentMonth];
	};

	return (
		<section className="flex justify-around border-solid border-secondary border p-4 rounded-lg w-[90%] w-complete grid-resume">
			<div className="flex items-center justify-center gap-2.5 date">
				<img
					onClick={handlePrevMonth}
					className="cursor-pointer transition duration-300 ease-in-out hover:scale-110"
					src={left}
					alt="ícone de uma seta apontando para a esquerda"
				/>
				<span className="text-white">{formatCurrentMonth(currentMonth)}</span>
				<img
					onClick={handleNextMonth}
					className="cursor-pointer transition duration-300 ease-in-out hover:scale-110"
					src={right}
					alt="ícone de uma seta apontando para a direita"
				/>
			</div>

			<ResumeItem title="Receita Total" value={income} className="income" />
			<ResumeItem title="Despesa Total" value={expanse} className="expanse" />
			<ResumeItem title="Economia Total" value={total} className="total" />
		</section>
	);
};

export default Resume;
