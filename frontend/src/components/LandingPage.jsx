import { Col, Row, Container, Image } from "react-bootstrap";
import React from "react";
import background_image from "../assets/images/landing.jpg";
import backbar from "../assets/images/backbar.jpeg";
import logo from "../assets/images/Logo.png";
import {
	FaCocktail,
	FaGlassWhiskey,
	FaRegHourglass,
	FaTools,
	FaCashRegister,
} from "react-icons/fa";
import { GiSpiralBottle } from "react-icons/gi";
import { IoMdHourglass, IoMdContact } from "react-icons/io";
import { MdLogin } from "react-icons/md";
const LandingPage = () => {
	return (
		<Container fluid>
			<Row>
				<div className="bg-black d-flex justify-content-between align-items-center ml-5">
					<div className="d-flex justify-content-evenly">
						<img src={logo}></img>
						<h1 className="text-light p-3">Bartender Boot Camp</h1>
					</div>
					<div className="d-flex justify-content-end">
						<div className="text-light fs-5">
							<MdLogin color="white" size={50} />
							<span className="p-3">Login</span>
						</div>
						<div className="text-light fs-5">
							<FaCashRegister color="white" size={50} />
							<span className="p-3">Register</span>
						</div>
						<div className="text-light fs-5">
							<IoMdContact color="white" size={50} />
							<span className="p-3">Contact</span>
						</div>
					</div>
				</div>
			</Row>
			<Row className="landing-page-image">
				{/* <div className="landing-page-image"></div> */}
			</Row>
			<Row className="p-5">
				<Col className="d-flex justify-content-evenly">
					<div className="d-flex ml-5">
						<FaCocktail size={150} />
						<p className="mt-auto mb-auto p-3 fs-5 fw-bold">
							Learn how to make the most essential classic and modern classic
							cocktails.
						</p>
					</div>
				</Col>
				<Col>
					<div className="d-flex">
						<FaGlassWhiskey size={150} />
						<p className="mt-auto mb-auto p-3 fs-5 fw-bold">
							Become a whiskey pro with our expanded section on American and
							International whiskies.
						</p>
					</div>
				</Col>
			</Row>
			<Row className="p-5">
				<Col className="d-flex justify-content-evenly">
					<div className="d-flex ml-5">
						<IoMdHourglass size={150} />
						<p className="mt-auto mb-auto p-3 fs-5 fw-bold">
							Learn contemporary cocktology with the most modern tools and
							methods.
						</p>
					</div>
				</Col>
				<Col>
					<div className="d-flex">
						<GiSpiralBottle size={150} />
						<p className="mt-auto mb-auto p-3 fs-5 fw-bold">
							Gain an in-depth knowledge of Spirits from around the world.
						</p>
					</div>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
};

export default LandingPage;
