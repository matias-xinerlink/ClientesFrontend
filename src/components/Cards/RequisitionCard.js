import React from 'react'
import moment from 'moment'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { Loading } from '../others/Loading'
import { MainData } from './RequisitionComponents/MainData'
import { ReemplazoData } from './RequisitionComponents/ReemplazoData'
import { ReferredData } from './RequisitionComponents/ReferredData'
import { JefaturaData } from './RequisitionComponents/JefaturaData'
import { CargoData } from './RequisitionComponents/CargoData'
import { RequisitionStatusBadge } from '../others/RequisitionStatusBadge'
import { ApprovalsData } from './RequisitionComponents/ApprovalsData'

export const RequisitionCard = ({ data, requisitionId, loading }) => {
    return (
        <Card>
            <CardHeader>
                <Row className="align-items-center">
                    <Col md="6">
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Solicitud #{requisitionId}
                        </h6>
                        <h2>{data ? data.title : 'Obteniendo información...'}</h2>
                        <small className="text-nowrap">Creada el <b>{data ? moment(data.createdAt).format('LLL') : '...'}</b> por <b>{data?.user.username}</b></small>
                    </Col>
                    <Col md="6" className="mt-3 mt-md-0 text-md-right">
                        {
                            data &&
                            <RequisitionStatusBadge className="ml-auto" status={data.status} />
                        }
                    </Col>
                </Row>
            </CardHeader>
            <CardBody className="p-md-5">
                {
                    loading
                        ?
                        <Loading />
                        :
                        (
                            <>
                                <MainData data={data} />
                                {
                                    data.motivo_reemplazo && <ReemplazoData data={data} />
                                }
                                {
                                    data.rut_referido && <ReferredData data={data} />
                                }
                                <JefaturaData data={data} />
                                <CargoData data={data} />
                                {
                                    data.approvals.length > 0 && <ApprovalsData data={data} />
                                }
                            </>
                        )

                }
            </CardBody>
        </Card>
    )
}
