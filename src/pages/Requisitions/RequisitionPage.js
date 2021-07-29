import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

export const RequisitionPage = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Solicitud
                        </h6>
                        <h2 className="mb-0">Hola mundo</h2>
                    </CardHeader>
                    <CardBody>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
