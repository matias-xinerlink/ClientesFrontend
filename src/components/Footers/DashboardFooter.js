import React from 'react'
import { Row, Col } from "reactstrap";

export const DashboardFooter = () => {
    return (
        <footer className="my-4 py-1">
            <Row className="align-items-center justify-content-xl-between">
                <Col>
                    <small className="copyright text-center text-xl-left text-muted">
                        © {new Date().getFullYear()}{" "}
                        <a className="font-weight-bold ml-1" href="https://www.xinerlink.cl/" rel="noopener noreferrer" target="_blank">
                            XinerLink
                        </a>
                    </small>
                </Col>
            </Row>
        </footer>
    )
}
