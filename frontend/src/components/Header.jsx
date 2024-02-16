import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersSlice";
import logo from "../assets/images/Logo.png";

const Header = () => {
	const { userInfo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//we can call this whatever we want
	const [logoutApiCall] = useLogoutMutation();

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
				expand="lg"
				collapseOnSelect
			>
				<Container>
					<Navbar.Brand href="/">
						<img src={logo}></img>
						Bartender Bootcamp
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/cart">
								<FaShoppingCart /> Cart
							</Nav.Link>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id="username">
									<Nav.Link to="profile">
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</Nav.Link>
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
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
