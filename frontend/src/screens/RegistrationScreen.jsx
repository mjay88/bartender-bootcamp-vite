import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { useRegisterMutation } from "../slices/usersSlice";
import { setCredentials } from "../slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import { validatePassword } from "../utils/validatePassword";

const RegistrationScreen = () => {
	const [validated, setValidated] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [register, { isLoading }] = useRegisterMutation();

	const { userInfo } = useSelector((state) => state.auth);
	//query the params of the current url -> if we find redirect, redirect, else go to home page, handles this : http://localhost:3000/login?redirect=/shipping
	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get("redirect") || "/";
	//check for user info, navigate redirect if user is logged in
	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [userInfo, redirect, navigate]);

	const submitHandler = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			toast.error("Please make sure all registration fields are valid");
			setValidated(true);
			return;
		}
		if (!validatePassword(password)) {
			toast.error(
				"Password must contain one number, one uppercase letter, one lower case letter, and one number"
			);
			return;
		}
		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}
		try {
			const res = await register({ email, password, name }).unwrap(); //unwrap uses the resolved value from the promise
			dispatch(setCredentials({ ...res }));
			navigate(redirect);
		} catch (error) {
			toast.error(error?.data?.message || error?.error);
		}
	};

	return (
		<FormContainer>
			<h1>Sign Up</h1>

			<ToastContainer />
			<Form noValidate validated={validated} onSubmit={submitHandler}>
				<Form.Group controlId="name" className="my-3">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						pattern="^[a-zA-Z0-9]+$"
						minLength="5"
						required
						isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(name)}
					></Form.Control>
					<Form.Control.Feedback type="invalid">
						Please enter a valid username (alphanumeric characters only).
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="email" className="my-3">
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						isInvalid={validated && !validatePassword(password)}
						isValid={validated && validatePassword(password)}
					></Form.Control>
					<Form.Control.Feedback type="invalid">
						Please enter a valid email address.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="password" className="my-3">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						minLength="6"
					></Form.Control>
					<Form.Control.Feedback type="invalid">
						"Password must contain one number, one uppercase letter, one lower
						case letter, and on special character."
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="confirmPassword" className="my-3">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Confirm password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						minLength={6}
						required
						pattern={password}
						isInvalid={validated && confirmPassword !== password}
					></Form.Control>
					<Form.Control.Feedback type="invalid">
						Passwords do not match.
					</Form.Control.Feedback>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				</Form.Group>
				<Button
					type="submit"
					variant="primary"
					className="mt-2"
					disabled={isLoading}
				>
					Register
				</Button>
				{isLoading && <Loader />}
			</Form>
			<Row className="py-3">
				<Col>
					Already have an accout?{" "}
					<Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
						Login
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default RegistrationScreen;
