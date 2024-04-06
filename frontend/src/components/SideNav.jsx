import { LinkContainer } from "react-router-bootstrap";
import Sidebar from "react-bootstrap-sidebar-menu";
import React, { useState, useRef, useEffect } from "react";
import useWindowDimensions from "../customHooks/useWindowDimensions";

const SideNav = ({ menuItems }) => {
	const { height, width } = useWindowDimensions();
	console.log(height, width, "window Dimensions");
	const [isToggled, setIsToggled] = useState(false);

	console.log(isToggled, "isToggled");
	return (
		<Sidebar
			variant="dark"
			bg="dark"
			expand={false}
			isToggled={isToggled}
			onToggle={() => setIsToggled(!isToggled)}
		>
			<Sidebar.Nav>
				<Sidebar.Collapse getScrollValue={500}>
					<Sidebar.Header>
						<Sidebar.Brand>Categories</Sidebar.Brand>
						<Sidebar.Toggle />
					</Sidebar.Header>

					<Sidebar.Body>
						{isToggled ? null : <SidebarItems menuItems={menuItems} />}
					</Sidebar.Body>
				</Sidebar.Collapse>
				<Sidebar.Footer className="sidebar-footer">
					<Sidebar.Nav.Title className="text-light">
						Footer Stuff
					</Sidebar.Nav.Title>
				</Sidebar.Footer>
			</Sidebar.Nav>
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
								{item.url ? (
									<LinkContainer
										style={{ textDecoration: "none" }}
										to={`/sections/${item.url}`}
									>
										<Sidebar.Nav.Title>{item.title}</Sidebar.Nav.Title>
									</LinkContainer>
								) : (
									<>
										<Sidebar.Nav.Icon />
										<Sidebar.Nav.Title>{item.title}</Sidebar.Nav.Title>
									</>
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
