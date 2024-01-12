import { Accordion, Navbar, Col } from "react-bootstrap";
import Sidebar from "react-bootstrap-sidebar-menu";
import React from "react";

const SideNav = () => {
	return (
		// <Navbar className="flex-column" expand="xs" collapseOnSelect>
		// 	<Col md={2}>
		// 		<Accordion>
		// 			<Accordion.Item eventKey="0">
		// 				<Accordion.Header>Vodka</Accordion.Header>
		// 				<Accordion.Body>History of Vodka</Accordion.Body>
		// 				<Accordion.Body>How Its Made</Accordion.Body>
		// 				<Accordion.Body>Tasting and Serving Vodka</Accordion.Body>
		// 			</Accordion.Item>
		// 			<Accordion.Item eventKey="1">
		// 				<Accordion.Header>Gin</Accordion.Header>
		// 				<Accordion.Body>Gin</Accordion.Body>
		// 			</Accordion.Item>
		// 			<Accordion.Item eventKey="2">
		// 				<Accordion.Header>Rum</Accordion.Header>
		// 				<Accordion.Body>Rum</Accordion.Body>
		// 			</Accordion.Item>
		// 		</Accordion>
		// 	</Col>
		// </Navbar>
		<Sidebar variant="dark" bg="dark" expand="sm">
			<Sidebar.Collapse getScrollValue={500}>
				<Sidebar.Header>
					<Sidebar.Brand>Logo</Sidebar.Brand>
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
