import React from 'react'
import { Badge, Table } from 'reactstrap'
import { config } from '../../config/env'
import { useFetch } from '../../hooks/useFetch'
import { CandidateActions } from '../Navigations/CandidateActions'

export const CandidatesTable = ({ candidates }) => {

    const { data, loading } = useFetch(`${config.apiUrl}/permisos`)

    return (
        <Table className="align-items-center h-min-100" style={{ zIndex: 10 }} responsive>
            <thead className="thead-light">
                <tr>
                    <th scope="col">RUT</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Género</th>
                    <th scope="col">Email</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    candidates.length > 0 && candidates.map(candidate => {
                        return <tr key={candidate.id}>

                            <th scope="row">
                                <div className="d-flex align-items-center">
                                    <span className="mb-0 text-sm">
                                        {candidate.user_metadata.dni}
                                    </span>
                                </div>
                            </th>
                            <td>{candidate.first_name + ' ' + candidate.last_name}</td>
                            <td>
                                {
                                    candidate.user_metadata.gender === 'female'
                                        ?
                                        <Badge color="primary">Mujer</Badge>
                                        :
                                        (
                                            candidate.user_metadata.gender === 'male'
                                                ?
                                                <Badge color="info">Hombre</Badge>
                                                :
                                                <Badge color="secondary">Desconocido</Badge>
                                        )
                                }
                            </td>
                            <td>{candidate.email}</td>
                            <td>+{candidate.professional_metadata.phone}</td>
                            {/* <td>{moment(item.createdAt).format('LLL')}</td> */}
                            <td>
                                {
                                    !loading
                                    &&
                                    <CandidateActions candidate={candidate} permissions={data} />
                                }
                            </td>
                        </tr>
                    })
                }
            </tbody>
            {
                candidates.length === 0 &&
                <p className="p-3">No hay candidatos para esta solicitud.</p>
            }
        </Table >
    )
}
