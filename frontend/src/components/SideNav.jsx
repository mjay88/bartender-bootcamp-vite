import { Accordion, Navbar, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "react-bootstrap-sidebar-menu";
import React from "react";

const SideNav = ({ menuItems }) => {
	return (
		<Sidebar variant="dark" bg="dark" expand={false}>
			<Sidebar.Collapse getScrollValue={500}>
				<Sidebar.Header>
					{/* <Container>
						<h4>Categories</h4>
					</Container> */}
					<Sidebar.Brand>Categories</Sidebar.Brand>
					<Sidebar.Toggle />
				</Sidebar.Header>

				<Sidebar.Body>
					<SidebarItems menuItems={menuItems} />
				</Sidebar.Body>
			</Sidebar.Collapse>
		</Sidebar>
	);
};

const SidebarItems = ({ menuItems }) => {
	// console.log(menuItems, "menuItems");
	return (
		<>
			{menuItems.map((item, idx) => {
				return (
					<Sidebar.Nav key={idx}>
						<Sidebar.Sub eventKey={0}>
							<Sidebar.Sub.Toggle>
								<Sidebar.Nav.Icon />
								{item.url ? (
									<Link to={item.url}>
										<Sidebar.Nav.Title>{item.title}</Sidebar.Nav.Title>
									</Link>
								) : (
									<Sidebar.Nav.Title>{item.title}</Sidebar.Nav.Title>
								)}
							</Sidebar.Sub.Toggle>
							<Sidebar.Sub.Collapse>
								<Sidebar.Nav>
									{item?.submenu && <SidebarItems menuItems={item.submenu} />}
								</Sidebar.Nav>
							</Sidebar.Sub.Collapse>
						</Sidebar.Sub>
					</Sidebar.Nav>
				);
			})}
		</>
	);
};

export default SideNav;
