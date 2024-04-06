import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersSlice";
import useWindowDimensions from "../customHooks/useWindowDimensions";

const UserProfileDropDown = () => {
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

	if (width > 600) {
		return null;
	}

	return (
		<Navbar
			activeStyle={{ backgroundColor: "dark", color: "white" }}
			className="flex-column"
			bg="transparent"
			variant="dark"
			expand={true}
			data-bs-theme="dark"
			collapseOnSelect
		>
			<Container className="d-flex flex-wrap">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{userInfo ? (
							<NavDropdown
								className="dropdown-menu-dark footer-dropdown"
								title={userInfo.name}
								id="username"
								drop="up"
								bg="dark"
								variant="transparent"
								data-bs-theme="dark"
								activeStyle={{ backgroundColor: "dark", color: "white" }}
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
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default UserProfileDropDown;
