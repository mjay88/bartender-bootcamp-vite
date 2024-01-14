import { Container, Col, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import Layout from "./components/Layout";
import Main from "./components/Main";

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
				</Main>
			</Layout>
			<Footer />
		</>
	);
};

export default App;
