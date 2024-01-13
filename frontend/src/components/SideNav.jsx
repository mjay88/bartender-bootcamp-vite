import { Accordion, Navbar, Col, Container } from "react-bootstrap";
import Sidebar from "react-bootstrap-sidebar-menu";
import React from "react";

const SideNav = () => {
	return (
		<Sidebar variant="dark" bg="dark" expand="true">
			<Sidebar.Collapse getScrollValue={500}>
				<Sidebar.Header>
					{/* <Container>
						<h4>Categories</h4>
					</Container> */}
					<Sidebar.Brand>Categories</Sidebar.Brand>
					<Sidebar.Toggle />
				</Sidebar.Header>
				<Sidebar.Body>
					<Sidebar.Nav>
						<Sidebar.Nav.Link eventKey="menu_title">
							<Sidebar.Nav.Icon>1</Sidebar.Nav.Icon>
							<Sidebar.Nav.Title>Menu Title</Sidebar.Nav.Title>
						</Sidebar.Nav.Link>
						<Sidebar.Sub eventKey={0}>
							<Sidebar.Sub.Toggle>
								<Sidebar.Nav.Icon />
								<Sidebar.Nav.Title>Submenu</Sidebar.Nav.Title>
							</Sidebar.Sub.Toggle>
							<Sidebar.Sub.Collapse>
								<Sidebar.Nav>
									<Sidebar.Nav.Link eventKey="sum_menu_title">
										<Sidebar.Nav.Icon>1.1</Sidebar.Nav.Icon>
										<Sidebar.Nav.Title>Sub menu item</Sidebar.Nav.Title>
									</Sidebar.Nav.Link>
								</Sidebar.Nav>
							</Sidebar.Sub.Collapse>
						</Sidebar.Sub>
					</Sidebar.Nav>
				</Sidebar.Body>
			</Sidebar.Collapse>
		</Sidebar>
	);
};

export default SideNav;
