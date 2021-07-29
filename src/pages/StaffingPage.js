import React from 'react'
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap'

export const StaffingPage = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Dotación
                        </h6>
                        <h2 className="mb-0">Empleados</h2>
                    </CardHeader>
                    <CardBody>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores ipsam minus maiores ratione voluptatum optio excepturi obcaecati culpa! Deserunt dolorem deleniti, nihil corrupti maxime facilis nulla enim repellat quas?
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
