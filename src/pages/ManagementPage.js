import React from 'react'
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap'

export const ManagementPage = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Gestión
                        </h6>
                        <h2 className="mb-0">Reportes</h2>
                    </CardHeader>
                    <CardBody>
                        <iframe title="Datos extraidos" width="1000px" height="400px" style={{ display: 'block' }} frameborder="0" src="https://reportes.xinerlink.cl/v/xRwVN6we6Rlt"></iframe>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
