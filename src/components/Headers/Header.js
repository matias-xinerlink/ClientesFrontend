import React from 'react'
import { Container, Row } from "reactstrap";

export const Header = ({ children }) => {
    return (
        <div className="bg-gradient-success pb-8 pt-5 pt-md-8">
            <Container fluid>
                <div className="header-body">
                    <Row>
                        {children}
                    </Row>
                </div>
            </Container>
        </div>
    )
}
