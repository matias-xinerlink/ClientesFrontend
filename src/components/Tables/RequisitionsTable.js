import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import { RequisitionStatusBadge } from '../others/RequisitionStatusBadge'
import { UserAvatar } from '../others/UserAvatar'
import { RequisitionsActions } from '../Navigations/RequisitionsActions'

export const RequisitionsTable = ({ data }) => {

    return (
        <Table className="align-items-center h-min-100" style={{ zIndex: 10 }} responsive>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Solicitud</th>
                    <th scope="col">Proyecto</th>
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
                                        <Link to={'/solicitudes/' + item.id}>
                                            {item.title}
                                        </Link>
                                    </span>
                                </div>
                            </th>
                            <td>{item.project}</td>
                            <td>{moment(item.createdAt).format('LLL')}</td>
                            <td>
                                <RequisitionStatusBadge status={item.status} />
                            </td>
                            <td>
                                <UserAvatar user={item.user} tooltip={true} />
                            </td>
                            <td>
                                {
                                    item.approvals.length > 0 &&
                                    <div className="avatar-group">
                                        {
                                            item.approvals.map(approval => {
                                                return (
                                                    <UserAvatar user={approval.user} tooltip={true} key={approval.user.id} />
                                                )
                                            })
                                        }

                                    </div>
                                }
                            </td>
                            <td>
                                <RequisitionsActions requisition={item} />
                            </td>
                        </tr>
                    })
                }
            </tbody>
            {
                data.message &&
                <p className="p-3">{data.message}</p>
            }
        </Table>
    )
}
