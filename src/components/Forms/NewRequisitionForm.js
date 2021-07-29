import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { Form, Input } from 'reactstrap'
import { config } from '../../config/env';
import { FormContext } from '../../pages/NewRequestPage';
import { ApprovalsData } from './NewRequisition/ApprovalsData';
import { ContactData } from './NewRequisition/ContactData';
import { GeneralData } from './NewRequisition/GeneralData';
import { MainData } from './NewRequisition/MainData';
import { ReferredData } from './NewRequisition/ReferredData';
import { ReplacedData } from './NewRequisition/ReplacedData';
import { ErrorModal } from './NewRequisition/subcomponents/ErrorModal';
import { SuccessModal } from './NewRequisition/subcomponents/SuccessModal';


export const NewRequisitionForm = () => {

    const [referred, setReferred] = useState(false)
    const { formdata } = useContext(FormContext);
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const history = useHistory()


    const resetError = () => {
        setError(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { servicio, causal, vertical, region, sucursal, contrato } = formdata;

        if (servicio && causal && vertical && region && sucursal && contrato) {

            fetch(`${config.apiUrl}/solicitudes/crear`, { method: 'POST', headers: { "Content-Type": "application/json", "x-access-token": localStorage.getItem('sessionToken') }, body: JSON.stringify(formdata) })
                .then(response => response.json())
                .then(result => {
                    setSuccess(result);
                    setError(null)
                })
                .catch(error => {
                    setError(error)
                });

        }
        else {
            setError('Al parecer se te olvidó llenar algunos campos del formulario, por favor revisa nuevamente.');
        }
    }


    return (
        <Form encType="multipart/form-data" onSubmit={handleSubmit}>
            <MainData />
            <ReplacedData />
            <hr />
            <ReferredData referred={referred} setReferred={setReferred} />
            <hr />
            <ContactData />
            <hr />
            <GeneralData />
            <hr />
            <ApprovalsData />
            <Input className="my-4 btn btn-primary btn-block mt-5" type="submit" value={'Crear Solicitud'} />
            {
                error &&
                <ErrorModal msj={error} toggle={resetError} />
            }
            {
                success &&
                <SuccessModal info={success} toggle={history} />
            }
        </Form>
    )
}
