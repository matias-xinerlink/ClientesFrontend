import React, { useState } from 'react'
import { Collapse, NavbarBrand, Navbar, Nav, Container, Row, Col } from "reactstrap";
import logo from '../../assets/img/brand/Xinerlink-logo.png'
import { MainNavigation } from '../Navigations/MainNavigation';
import { UserDropdown } from '../Navigations/UserDropdown'

export const Sidebar = () => {

    const [collapseOpen, setCollapseOpen] = useState();
    const toggleCollapse = () => {
        setCollapseOpen((data) => !data);
    };
    // closes the collapse
    const closeCollapse = () => {
        setCollapseOpen(false);
    };

    return (
        <Navbar
            className="navbar-vertical fixed-left navbar-light bg-white"
            expand="md"
            id="sidenav-main"
        >
            <Container fluid>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleCollapse}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <NavbarBrand className="pt-md-2">
                    <img src={logo} alt="Logo Xinerlink" />
                </NavbarBrand>
                <Nav className="align-items-center d-md-none">
                    <UserDropdown />
                </Nav>

                <Collapse navbar isOpen={collapseOpen}>
                    <div className="navbar-collapse-header d-md-none">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <img src={logo} alt="Logo Xinerlink" />
                            </Col>
                            <Col className="collapse-close" xs="6">
                                <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <MainNavigation closeCollapse={closeCollapse} />
                </Collapse>
            </Container>
        </Navbar>
    )
}
