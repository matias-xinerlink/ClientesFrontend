import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

export const RequisitionPage = () => {

    const { requisition } = useParams()

    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Solicitud
                        </h6>
                        <h2 className="mb-0">{requisition}</h2>
                    </CardHeader>
                    <CardBody>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
