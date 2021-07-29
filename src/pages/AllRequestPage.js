import React from 'react'
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import { Loading } from '../components/others/Loading'
import { RequisitionsTable } from '../components/Tables/RequisitionsTable'
import { config } from '../config/env'
import { useFetch } from '../hooks/useFetch'

export const AllRequestPage = () => {

    const { loading, data } = useFetch(`${config.apiUrl}/solicitudes`)

    console.log(data);

    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Solicitudes
                        </h6>
                        <h2 className="mb-0">Listado de Solicitudes</h2>
                    </CardHeader>
                    <CardBody>

                        {
                            loading
                                ?
                                <Loading />
                                :
                                <RequisitionsTable data={data} />
                        }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
