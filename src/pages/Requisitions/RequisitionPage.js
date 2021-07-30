import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { RequisitionCard } from '../../components/Cards/RequisitionCard'
import { config } from '../../config/env'
import { useFetch } from '../../hooks/useFetch'

export const RequisitionPage = () => {

    const { requisition } = useParams()
    const { data, loading, error } = useFetch(`${config.apiUrl}/solicitud/${requisition}`);
    if (data?.message || error) return <Redirect to='/solicitudes' />

    return (
        <Row>
            <Col>
                <RequisitionCard data={data} requisitionId={requisition} loading={loading} />
            </Col>
        </Row>
    )
}
