import moment from 'moment'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { Loading } from '../../components/others/Loading'
import { TitleAndText } from '../../components/others/TitleAndText'
import { config } from '../../config/env'
import { useFetch } from '../../hooks/useFetch'

export const RequisitionPage = () => {

    const { requisition } = useParams()
    const { data, loading } = useFetch(`${config.apiUrl}/solicitud/${requisition}`);

    console.log(data);

    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Solicitud #{requisition}
                        </h6>
                        <h2>{data ? data.title : 'Obteniendo información...'}</h2>
                        <small className="text-nowrap">Creada el {moment(data?.createdAt).format('LLL')}</small>
                    </CardHeader>
                    <CardBody>
                        {
                            loading
                                ?
                                <Loading />
                                :
                                <Row>
                                    <TitleAndText title="Ubicación" text={data.region} completerow />
                                    <TitleAndText title="Sucursal Xinerlink" text={data.sucursal} />
                                    <TitleAndText title="Servicio" text={data.servicio} />
                                    <TitleAndText title="Causal" text={data.causal} />
                                    <TitleAndText title="Informes Requeridos" text={JSON.parse(data.informes_requeridos)} multy />
                                    <TitleAndText title="Proyecto" text={data.project} />
                                    <TitleAndText title="Observaciones" text={data.observaciones} />
                                </Row>
                        }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
