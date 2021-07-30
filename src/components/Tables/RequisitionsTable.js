import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { Table, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { RequisitionStatusBadge } from '../others/RequisitionStatusBadge'
import { UserAvatar } from '../others/UserAvatar'

export const RequisitionsTable = ({ data }) => {

    return (
        <Table className="align-items-center min-h-100" style={{ minHeight: 100 }}>
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
                                <UncontrolledDropdown>
                                    <DropdownToggle
                                        className="btn-icon-only text-light"
                                        role="button"
                                        size="sm"
                                        color=""
                                    >
                                        <i className="fas fa-ellipsis-v" />
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                        <DropdownItem className="noti-title" header tag="div">
                                            <h6 className="text-overflow m-0">¿Qué deseas hacer?</h6>
                                        </DropdownItem>
                                        <DropdownItem tag={Link} to={'/solicitudes/' + item.id}>
                                            Ver Solicitud
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
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
