import React, { useContext, useEffect } from 'react'
import { Fade, Row } from 'reactstrap'
import { FormContext } from '../../../pages/NewRequestPage'
import { InputForm } from './subcomponents/InputForm'
import { TogglerSection } from './subcomponents/TogglerSection'

export const ReferredData = ({ referred, setReferred }) => {

    const { formdata, setFormdata } = useContext(FormContext);

    useEffect(() => {
        setFormdata({
            ...formdata, referido: {
                nombre: null,
                rut: null,
                mail: null,
                telefono: null,
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [referred])

    return (
        <>
            <TogglerSection title="Tengo un referido/reemplazante" toggle={(e) => setReferred(!referred)} />
            {
                referred &&
                (
                    <Fade in={referred}>
                        <h6 className="heading-small text-muted">Datos del referido/reemplazante</h6>
                        <Row className="p-lg-4">
                            <InputForm label="Nombre" formValue="referido" formAttr="nombre" />
                            <InputForm label="RUT" formValue="referido" formAttr="rut" />
                            <InputForm label="Email" type="email" formValue="referido" formAttr="mail" />
                            <InputForm label="Teléfono" formValue="referido" formAttr="telefono" />
                        </Row>
                    </Fade>
                )
            }
        </>
    )
}
