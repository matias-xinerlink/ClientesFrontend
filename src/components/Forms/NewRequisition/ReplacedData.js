import React, { useContext, useEffect } from 'react'
import { Fade, Row } from 'reactstrap'
import { FormContext } from '../../../pages/NewRequestPage'
import { InputForm } from './subcomponents/InputForm'
import { SelectorForm } from './subcomponents/SelectorForm'

export const ReplacedData = () => {

    const { formdata, setFormdata } = useContext(FormContext);

    const checkCausal = () => {
        if (formdata.causalId === '22048') {
            return true
        }
        return false
    }

    useEffect(() => {
        setFormdata({
            ...formdata, reemplazo: {
                motivo: null,
                motivoId: null,
                nombre: null,
                rut: null,
                observaciones: null,
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formdata.causalId])

    return (

        checkCausal() &&
        (
            <Fade in={checkCausal()}>
                <hr />
                <h6 className="heading-small text-muted">Datos del trabajador a reemplazar</h6>
                <Row className="p-lg-4">
                    <InputForm label="RUT" formValue="reemplazo" formAttr="rut" />
                    <InputForm label="Nombre" formValue="reemplazo" formAttr="nombre" />
                    <SelectorForm label="Motivo de Reemplazo" formValue="reemplazo" formAttr="motivo" />
                    <InputForm label="Observaciones" formValue="reemplazo" formAttr="observaciones" type="textarea" />
                </Row>

            </Fade>
        )

    )
}
