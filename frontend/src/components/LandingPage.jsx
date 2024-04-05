import {
	Col,
	Row,
	Container,
	Navbar,
	Nav,
	ListGroup,
	Button,
} from "react-bootstrap";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import logo from "../assets/images/Logo.png";
import { FaCocktail, FaGlassWhiskey, FaCashRegister } from "react-icons/fa";
import { GiSpiralBottle } from "react-icons/gi";
import { IoMdHourglass, IoMdContact } from "react-icons/io";
import { MdLogin } from "react-icons/md";

const LandingPage = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get("redirect") || "/";

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [userInfo, redirect, navigate]);

	return (
		<>
			<Navbar
				className="flex-row"
				bg="dark"
				variant="dark"
				expand="lg"
				collapseOnSelect
			>
				<Container>
					<Navbar.Brand href="/">
						<div className="landing-navbar-brand">
							<img className="m-auto" src={logo}></img>
							<h1 className="m-auto" sm={"p-0"}>
								Bartender Bootcamp
							</h1>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/login">
								<MdLogin color="white" size={25} />
								<span className="fs-5 p-3">Login</span>
							</Nav.Link>
							<Nav.Link href="/register">
								<FaCashRegister color="white" size={25} />
								<span className="fs-5 p-3">Register</span>
							</Nav.Link>
							<Nav.Link href="#">
								<IoMdContact color="white" size={25} />
								<span className="fs-5 pl-3">Contact</span>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

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
			<Row className="m-auto p-5">
				<Col>
					<h2>Are you ready to...</h2>
					<ListGroup variant="flush">
						<ListGroup.Item className="mb-2">
							Discover the art of crafting both timeless classic and modern
							classic cocktails.
						</ListGroup.Item>
						<ListGroup.Item className="mb-2">
							Elevate your whiskey expertise through our comprehensive guide on
							American and International whiskies.
						</ListGroup.Item>
						<ListGroup.Item className="mb-2">
							Master modern mixology techniques using the latest tools and
							methods
						</ListGroup.Item>
						<ListGroup.Item className="mb-2">
							Acquire extensive understanding of global Spirits.
						</ListGroup.Item>
						<ListGroup.Item>
							<LinkContainer to="/register">
								<Button size="lg" className="mt-3" variant="secondary">
									Register Today
								</Button>
							</LinkContainer>
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col>
					<ListGroup variant="flush">
						<h2>Already have an account?</h2>
						<ListGroup.Item>
							<LinkContainer to="/login">
								<Button size="lg" variant="secondary">
									Login
								</Button>
							</LinkContainer>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<Row>
				<Navbar sticky="bottom" className="flex-row" bg="dark" variant="dark">
					<Container>
						<Nav className="ms-auto">
							<Nav.Link href="/login">
								<MdLogin color="white" size={25} />
								<span className="fs-5 p-3">Login</span>
							</Nav.Link>
							<Nav.Link href="/register">
								<FaCashRegister color="white" size={25} />
								<span className="fs-5 p-3">Register</span>
							</Nav.Link>
							<Nav.Link href="#">
								<IoMdContact color="white" size={25} />
								<span className="fs-5 pl-3">Contact</span>
							</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</Row>
		</>
	);
};

export default LandingPage;
