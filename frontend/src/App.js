import { Container, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";

const App = () => {
	return (
		<>
			<Header />
			<main className="py-3">
				<SideNav />
			</main>
			<Footer />
		</>
	);
};

export default App;
