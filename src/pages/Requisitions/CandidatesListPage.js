import React from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Loading } from '../../components/others/Loading';
import { CandidatesTable } from '../../components/Tables/CandidatesTable';
import { config } from '../../config/env';
import { useFetch } from '../../hooks/useFetch';

export const CandidatesListPage = () => {

    const { requisition } = useParams()
    const { data, loading, error } = useFetch(`${config.apiUrl}/candidatos/${requisition}`)
    if (data?.message || error) return <Redirect to='/candidatos' />

    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Candidatos
                        </h6>
                        <h2 className="mb-0">Listado de candidatos para {data?.requisition?.title}</h2>
                    </CardHeader>
                    <CardBody>

                        {
                            loading
                                ?
                                <Loading />
                                :
                                <CandidatesTable candidates={data.candidates} />
                        }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
