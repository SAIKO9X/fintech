import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Card from "./pages/Card";
import Finance from "./pages/Finance";
import Analytics from "./pages/Analytics";
import Principal from "./pages/Principal";

function App() {
	return (
		<BrowserRouter>
			<Sidebar>
				<Routes>
					<Route path="/" element={<Card />} />
					<Route path="/card" element={<Card />} />
					<Route path="/principal" element={<Principal />} />
					<Route path="/finance" element={<Finance />} />
					<Route path="/analytics" element={<Analytics />} />
				</Routes>
			</Sidebar>
		</BrowserRouter>
	);
}

export default App;
