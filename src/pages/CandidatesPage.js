import React from 'react'
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import { Loading } from '../components/others/Loading'
import { RequisitionsCandidates } from '../components/Tables/RequisitionsCandidates'
import { config } from '../config/env'
import { useFetch } from '../hooks/useFetch'

export const CandidatesPage = () => {

    const { loading, data } = useFetch(`${config.apiUrl}/solicitudes`)


    return (
        <Row className="justify-content-center">
            <Col lg="9">
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Candidatos
                        </h6>
                        <h2 className="mb-0">Selecciona una solicitud</h2>
                    </CardHeader>
                    <CardBody>
                        {
                            loading
                                ?
                                <Loading />
                                :
                                <RequisitionsCandidates data={data.filter(item => item.status !== config.statusDefault)} />
                        }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
