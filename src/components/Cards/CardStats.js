import React from 'react'
import { Card, CardTitle, CardBody, Col, Row } from 'reactstrap'

export const CardStats = ({ title, value, icon, color, description, porcent }) => {
    return (
        <Col lg="6" xl="3">

            <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                    <Row>
                        <div className="col">
                            <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                {title}
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">
                                {value}
                            </span>
                        </div>
                        <Col className="col-auto">
                            <div className={`icon icon-shape bg-gradient-${color} text-white rounded-circle shadow`}>
                                <i className={`fas ${icon}`} />
                            </div>
                        </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                            <i className="fa fa-arrow-up" /> {porcent}%
                        </span>{" "}
                        <span className="text-nowrap">{description}</span>
                    </p>
                </CardBody>
            </Card>
        </Col>
    )
}
