import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Badge, Button, Table } from 'reactstrap'
import { useAuth } from '../../../auth/useAuth';
import { approvalId, approveRequest, isApproval } from '../../../helpers/isApproval';

export const ApprovalsData = ({ data }) => {

    const { user } = useAuth()
    const { approvals } = data;

    const [approved, setApproved] = useState(false)
    const handleApproval = async () => {
        const result = await approveRequest(approvalId(approvals, user))
        if (result) {
            setApproved(true);
        }
    }
    if (approved === true) return <Redirect to='/solicitudes' />

    return (
        <>
            <hr className="mt-2" />
            <h6 className="heading-small text-muted">Aprobadores de Solicitud</h6>
            <div className="p-lg-4">

                <Table className="align-items-center border" responsive>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Estado de Aprobación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            approvals.map(approval => {

                                const { user } = approval

                                return <tr key={approval.id}>
                                    <th scope="row">
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm rounded-circle mr-2">
                                                <img alt="..." src={`https://ui-avatars.com/api/?name=${user.username}&background=19204D&color=fff`} />
                                            </span>
                                            <span className="mb-0 text-sm">
                                                {user.username}
                                            </span>
                                        </div>
                                    </th>
                                    <td>{user.email}</td>
                                    <td>{user.position}</td>
                                    <td>{
                                        approval.approved
                                            ?
                                            <Badge color="success" pill>
                                                Aprobada
                                            </Badge>
                                            :
                                            <Badge color="secondary" pill>
                                                Pendiente
                                            </Badge>
                                    }
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
            {
                isApproval(approvals, user) &&
                <div className="mt-3">
                    <h5>Hola, <strong>{user.username}</strong>. Eres uno de los aprobadores de esta solicitud, ¿Deseas aprobarla?</h5>
                    <Button className="my-2" color="primary" type="button" onClick={handleApproval}>Aprobar Solicitud</Button>
                    <br />
                    <small className="text-muted">De no ser así solo debes dejarla como pendiente.</small>
                </div>
            }
        </>
    )
}
