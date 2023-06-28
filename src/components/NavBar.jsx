import Dark from "../assets/images/dark.png";

const NavBar = () => {
	return (
		<nav className="flex justify-between pb-24">
			<div>
				<h1 className="text-white font-bold responsive-2xl">Ola, Anna !!</h1>
				<p className="text-primary font-normal responsive-base">
					Gerencie suas finanças com segurança.
				</p>
			</div>

			<div className="flex items-center">
				<span className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-75 transition ease-in-out">
					<img src={Dark} alt="Ícone de uma Lua" />
				</span>
			</div>
		</nav>
	);
};

export default NavBar;
