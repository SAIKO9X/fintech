import TableItem from "./TableItem";

const Table = ({ items, handleDelete, currentMonth, currentYear }) => {
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

	const monthName = monthNames[currentMonth];

	return (
		<section className="overflow-hidden mt-[5%] w-[90%] w-complete mb-[5%]">
			<div className="overflow-hidden rounded ">
				<h2 className="text-center text-lg font-semibold mb-4">
					{monthName} de {currentYear}
				</h2>
				<table className="w-full opacity-90 rounded border-2 border-solid border-secondary border-separate text-center p-2">
					<thead className="font-semibold text-sm text-primary">
						<tr>
							<th className="w-1/5 pb-10"></th>
							<th className="w-1/5">Titulo</th>
							<th className="w-1/5">Data</th>
							<th className="w-1/5">Valor</th>
							<th className="w-1/5">Categoria</th>
						</tr>
					</thead>
					<tbody>
						{items?.map((item, index) => (
							<TableItem key={index} item={item} onDelete={handleDelete} />
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Table;
