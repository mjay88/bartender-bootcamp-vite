import { Container, Col, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import Layout from "./components/Layout";
import Main from "./components/Main";
import PreviousAndNextButtons from "./components/PreviousAndNextButtons";

import "./assets/styles/custom.scss";
import { menuItems } from "./menuItems";

const App = () => {
	return (
		<>
			<Header />
			<Layout>
				{/* <Header /> */}
				<SideNav menuItems={menuItems} />
				<Main>
					<Outlet />
					<PreviousAndNextButtons menuItems={menuItems} />
				</Main>
			</Layout>
			<Footer />
			<ToastContainer />
		</>
	);
};

export default App;
