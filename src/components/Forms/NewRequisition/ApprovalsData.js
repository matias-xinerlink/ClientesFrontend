import React, { useContext, useEffect, useState } from 'react'
import { Fade, Table } from 'reactstrap';
import { config } from '../../../config/env'
import { FormContext } from '../../../pages/NewRequestPage';
import { TogglerSection } from './subcomponents/TogglerSection';

export const ApprovalsData = () => {

    const [required, setRequired] = useState(false)
    const { formdata, setFormdata } = useContext(FormContext);


    const [process, setProcess] = useState([])
    const handleCheck = async (e, user) => {

        const checked = e.target.checked;

        if (checked) {
            setProcess(process => [...process, { id: user }])
        }
        else {
            const filter = process.filter(item => item.id !== user)
            setProcess(filter)
        }


    }

    useEffect(() => {
        console.log(process);
        setFormdata({ ...formdata, approvals: process })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [process])

    const [approvals, setApprovals] = useState([])
    fetch(`${config.apiUrl}/solicitudes/aprobadores`, { method: 'GET', headers: { "Content-Type": "application/json", "x-access-token": localStorage.getItem('sessionToken') } })
        .then(response => response.json())
        .then(result => {
            setApprovals(result)
        })
        .catch(error => {
            console.log('[Error]', error)
        });


    return (
        <>
            <TogglerSection title="Requiere aprobación" toggle={(e) => setRequired(!required)} />
            {
                required && (
                    <Fade in={required}>
                        <h6 className="heading-small text-muted">Lista de aprobadores</h6>
                        <div className="p-lg-4">
                            <Table className="align-items-center border" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Cargo</th>
                                        <th scope="col">Marcar como aprobador</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        approvals && approvals.map(item => {
                                            return <tr key={item.id}>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm rounded-circle mr-2">
                                                            <img alt="..." src={`https://ui-avatars.com/api/?name=${item.username}&background=19204D&color=fff`} />
                                                        </span>
                                                        <span className="mb-0 text-sm">
                                                            {item.username}
                                                        </span>
                                                    </div>
                                                </th>
                                                <td>{item.email}</td>
                                                <td>{item.position}</td>
                                                <td>
                                                    <label className="custom-toggle mb--1">
                                                        <input type="checkbox" onChange={(e) => handleCheck(e, item.id)} />
                                                        <span className="custom-toggle-slider rounded-circle" />
                                                    </label>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div >
                    </Fade>
                )
            }
        </>
    )
}
