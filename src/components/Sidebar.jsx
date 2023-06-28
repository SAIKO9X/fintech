import { NavLink } from "react-router-dom";
import { TbPigMoney } from "react-icons/tb";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { FaMoneyBillWave } from "react-icons/fa";
import Avatar from "../assets/images/avatar.png";
import logo from "../assets/images/logo.png";

const Sidebar = ({ children }) => {
	const menuItem = [
		{
			path: "/principal",
			name: "Principal",
			icon: <BsReverseLayoutTextSidebarReverse />,
		},
		{
			path: "/",
			name: "Adicionar",
			icon: <TbPigMoney />,
		},
		{
			path: "/analytics",
			name: "Estatísticas",
			icon: <SiSimpleanalytics />,
		},
		{
			path: "/finance",
			name: "Planejamento",
			icon: <FaMoneyBillWave />,
		},
	];

	return (
		<div className="h-screen">
			<aside className="fixed flex flex-col w-full h-1/5 bottom-aside">
				<div className="flex items-center font-semibold text-lg text-white pl-1 off">
					<span className="w-10">
						<img src={logo} alt="" />
					</span>
					<h1>Dynamic</h1>
				</div>

				<div className="pt-[20%] pb-[25%] text-[#747475]  pl-[2%] bottom-sidebar">
					{menuItem.map((item, index) => (
						<NavLink
							to={item.path}
							key={index}
							activeClassName="active"
							className="flex gap-4 pb-6 items-center responsive-base font-medium  transition-all duration-500 ease-[ease-in-out] bottom-link "
						>
							<div className="text-xl">{item.icon}</div>
							<span>{item.name}</span>
						</NavLink>
					))}
				</div>

				<div className="flex items-center pl-1 off">
					<img className="w-10 h-10" src={Avatar} alt="Avatar do Usuário" />
					<div className="pl-2">
						<p className="font-medium text-base text-white">Anna Karin</p>
						<p className="font-normal text-xs leading-[120%] text-[#747475]">
							annakarin@gmail.com
						</p>
					</div>
				</div>
			</aside>

			<main className="h-full w-full">{children}</main>
		</div>
	);
};

export default Sidebar;
