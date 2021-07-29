import React, { useState } from 'react'
import { NavLink as NavLinkRRD } from "react-router-dom";
import { NavItem, NavLink, Nav } from "reactstrap";

export const MainNavigation = ({ closeCollapse }) => {

    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <>
            <Nav navbar>
                <NavItem>
                    <NavLink to="/inicio" tag={NavLinkRRD} onClick={closeCollapse} activeClassName="active">
                        <i className="ni ni-chart-bar-32 text-primary" />
                        Inicio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="" onClick={toggleShow} data-toggle="collapse" role="button" aria-expanded={show} aria-controls="navbar-components">
                        <i className="ni ni-email-83 text-info" />
                        Solicitudes
                    </NavLink>
                    <div className={`collapse ${show && 'show'}`} id="navbar-components">
                        <ul className="nav nav-sm flex-column">
                            <NavItem>
                                <NavLink to="/nueva-solicitud" tag={NavLinkRRD} onClick={closeCollapse} activeClassName="active">
                                    <span className="sidenav-normal"> Nueva Solicitud </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/solicitudes" tag={NavLinkRRD} onClick={closeCollapse} activeClassName="active">
                                    <span className="sidenav-normal"> Listado de Solicitudes </span>
                                </NavLink>
                            </NavItem>
                        </ul>
                    </div>
                </NavItem>
                <NavItem>
                    <NavLink to="/candidatos" tag={NavLinkRRD} onClick={closeCollapse} activeClassName="active">
                        <i className="ni ni-books text-success" />
                        Candidatos
                    </NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink to="/proyectos" tag={NavLinkRRD} onClick={closeCollapse} activeClassName="active">
                        <i className="ni ni-bell-55 text-warning" />
                        Proyectos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/dotacion" tag={NavLinkRRD} onClick={closeCollapse} activeClassName="active">
                        <i className="ni ni-single-02 text-success" />
                        Dotación
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/gestion" tag={NavLinkRRD} onClick={closeCollapse} activeClassName="active">
                        <i className="ni ni-align-left-2 text-primary" />
                        Gestión
                    </NavLink>
                </NavItem> */}
            </Nav>
            <hr className="my-3" />
            <h6 className="navbar-heading text-muted">Más Opciones</h6>
            <Nav className="mb-md-3" navbar>
                <NavItem>
                    <NavLink href="#">
                        <i className="ni ni-support-16" />
                        Ayuda
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="ni ni-settings-gear-65" />
                        Configuración
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}
