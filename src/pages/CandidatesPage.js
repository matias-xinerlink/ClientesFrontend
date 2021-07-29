import React from 'react'
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap'

export const CandidatesPage = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Solicitud: #5556 - TENS UCI MUTUAL
                        </h6>
                        <h2 className="mb-0">Candidatos</h2>
                    </CardHeader>
                    <CardBody>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores ipsam minus maiores ratione voluptatum optio excepturi obcaecati culpa! Deserunt dolorem deleniti, nihil corrupti maxime facilis nulla enim repellat quas?
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
