import { Container, Col, Navbar } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import Layout from "./components/Layout";
import Main from "./components/Main";

import "./assets/styles/custom.scss";

const App = () => {
	return (
		<>
			<Header />
			<Layout>
				{/* <Header /> */}
				<SideNav />
				<Main>Outlet goes here</Main>
			</Layout>
			<Footer />
		</>
	);
};

export default App;
