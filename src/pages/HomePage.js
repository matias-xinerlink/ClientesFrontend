import React from 'react'
import { Col, Row } from 'reactstrap'
import { Staffing } from '../components/Charts/Staffing'
import { Vacancies } from '../components/Charts/Vacancies'

export const HomePage = () => {

    return (
        <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
                <Staffing />
            </Col>
            <Col className="mb-5 mb-xl-0" xl="4">
                <Vacancies />
            </Col>
        </Row>
    )
}
