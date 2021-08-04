import React from 'react'
import { Table } from 'reactstrap'
import { CandidatesBadge } from '../others/CandidatesBadge'
import { RequisitionStatusBadge } from '../others/RequisitionStatusBadge'
import { ViewCandidates } from '../others/ViewCandidates'

export const RequisitionsCandidates = ({ data }) => {
    return (
        <Table className="align-items-center" style={{ minHeight: 100 }} responsive>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Solicitud</th>
                    <th scope="col">Proyecto</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Candidatos</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length > 0 && data.map(item => {
                        return <tr key={item.id}>

                            <th scope="row">
                                <div className="d-flex align-items-center">
                                    <span className="mb-0 text-sm">
                                        {item.title}
                                    </span>
                                </div>
                            </th>
                            <td>{item.project}</td>
                            <td>
                                <RequisitionStatusBadge status={item.status} />
                            </td>
                            <td>
                                <CandidatesBadge requisitionId={item.id} />
                            </td>
                            <td>
                                <ViewCandidates requisitionId={item.id} />
                            </td>
                        </tr>
                    })
                }
            </tbody>
            {
                data.length === 0 &&
                <p className="p-3">No hay solicitudes esperando candidatos.</p>
            }
        </Table>
    )
}
