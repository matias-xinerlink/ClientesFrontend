import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'

export const HeaderNav = () => {
    return (
        <Col xs="12">
            <div className="row align-items-center pb-4">
                <div className="col-lg-6 col-7">
                    <h6 className="h2 text-white d-inline-block mb-0">Mayo 2021</h6>
                </div>
                <div className="col-lg-6 col-5 text-right">
                    <Link to="/nueva-solicitud">
                        <span className="btn btn-sm btn-neutral">Nueva Solicitud</span>
                    </Link>
                </div>
            </div>
        </Col>
    )
}
