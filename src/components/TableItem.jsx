import { FaTrash } from "react-icons/fa";

const TableItem = ({ item, onDelete }) => {
	const categoryColor = item.expanse ? "red" : "green";
	const categoryText = item.expanse ? "Saída" : "Entrada";

	const [year, month, day] = item.date.split("-");
	const formattedDate = `${day}/${month}/${year}`;

	const handleDelete = () => {
		onDelete(item.id);
	};

	return (
		<tr className="text-white font-normal text-sm">
			<td className="cursor-pointer hover:animation-shake hover:text-red-500">
				<FaTrash onClick={handleDelete} />
			</td>
			<td>{item.title}</td>
			<td>{formattedDate}</td>
			<td>R$ {item.amount}</td>
			<td>
				<span
					className={`inline-block px-2.5 py-[5px] rounded-xl text-xs category-${categoryColor}`}
				>
					{categoryText}
				</span>
			</td>
		</tr>
	);
};

export default TableItem;
