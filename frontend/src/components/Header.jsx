import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersSlice";
import logo from "../assets/images/Logo.png";
import useWindowDimensions from "../customHooks/useWindowDimensions";

const Header = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//we can call this whatever we want
	const [logoutApiCall] = useLogoutMutation();
	const { width } = useWindowDimensions();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap(); //unwrap unwraps the promise
			dispatch(logout(userInfo));
			navigate("/login");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<header>
			<Navbar
				className="flex-column"
				bg="dark"
				variant="dark"
				expand={true}
				collapseOnSelect
			>
				<Container className="d-flex flex-wrap">
					<Navbar.Brand
						href="/"
						className="custom-navbar-brand d-flex flex-wrap logo-and-image"
					>
						<img src={logo}></img>
						<div className="m-auto">Bartender Bootcamp</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						{width <= 600 ? null : (
							<Nav className="ms-auto">
								{userInfo ? (
									<NavDropdown
										className="dropdown-menu-dark"
										title={userInfo.name}
										id="username"
									>
										<LinkContainer to={`/edit-profile`}>
											<NavDropdown.Item>Edit Profile</NavDropdown.Item>
										</LinkContainer>
										<LinkContainer to={`/profile`}>
											<NavDropdown.Item>Profile</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>
											Logout
										</NavDropdown.Item>
									</NavDropdown>
								) : (
									<Nav.Link href="/login">
										<FaUser /> Sign In
									</Nav.Link>
								)}
							</Nav>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
