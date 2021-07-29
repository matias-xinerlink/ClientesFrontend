import moment from 'moment'
import React from 'react'
import { Row, Col, Card, CardBody, CardHeader, Table, Badge, UncontrolledTooltip } from 'reactstrap'
import { Loading } from '../components/others/Loading'
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
                                <Table className="align-items-center" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Solicitud</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Estado</th>
                                            <th scope="col">Creada por</th>
                                            <th scope="col">Aprobadores</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            !data.message && data.map(item => {
                                                return <tr key={item.id}>

                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <span className="mb-0 text-sm">
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <td>{moment().format('L')}</td>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className={`bg-${item.status === "Pendiente de Aprobación" ? 'warning' : 'primary'}`} />
                                                            {item.status}
                                                        </Badge>
                                                    </td>
                                                    <td>
                                                        <a className="avatar avatar-sm" href="#usercreator" id="usercreator" onClick={e => e.preventDefault()}>
                                                            <img alt="..." className="rounded-circle" src={`https://ui-avatars.com/api/?name=${item.user.username}&background=19204D&color=fff`} />
                                                        </a>
                                                        <UncontrolledTooltip delay={0} target="usercreator">
                                                            {item.user.username}
                                                        </UncontrolledTooltip>
                                                    </td>
                                                    <td>
                                                        {
                                                            item.approvals.length > 0 &&
                                                            <div className="avatar-group">
                                                                {
                                                                    item.approvals.map(approval => {
                                                                        return (
                                                                            <div key={approval.id}>
                                                                                <a className="avatar avatar-sm" href={'#user'+approval.user.id} id={`tooltipidapproval${approval.user.id}`} onClick={e => e.preventDefault()}>
                                                                                    <img alt={approval.user.username} className="rounded-circle" src={`https://ui-avatars.com/api/?name=${approval.user.username}&background=19204D&color=fff`} />
                                                                                </a>
                                                                                <UncontrolledTooltip delay={0} target={`tooltipidapproval${approval.user.id}`}>
                                                                                    {approval.user.username}
                                                                                </UncontrolledTooltip>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }

                                                            </div>
                                                        }
                                                    </td>
                                                    <td>En construcción</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                    {
                                        data.message &&
                                        <p className="p-3">{data.message}</p>
                                    }
                                </Table>
                        }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
