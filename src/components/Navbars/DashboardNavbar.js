import React from "react";
import { Navbar, Nav, Container } from "reactstrap";
import { UserDropdown } from '../Navigations/UserDropdown'

export const DashboardNavbar = () => {
    return (
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
            <Container fluid>
                <span className="h4 mb-0 text-white text-uppercase d-none d-md-inline-block">
                Portal Clientes
                </span>
                <Nav className="align-items-center d-none d-md-flex ml-md-auto" navbar>
                    <UserDropdown showName={true} />
                </Nav>
            </Container>
        </Navbar>
    )
}
