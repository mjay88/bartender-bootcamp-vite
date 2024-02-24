import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/Logo.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<Container fluid>
				<Row>
					<Col className="m-0 text-center py-3 d-flex justify-content-start">
						<div className="d-flex align-items-center">
							<img className="footer-logo" src={logo} />
							<p className="text-center p-0 m-0">
								Boot Camp &copy; {currentYear}
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
export default Footer;
