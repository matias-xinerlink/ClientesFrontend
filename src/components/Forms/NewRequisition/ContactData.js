import React from 'react'
import { Row } from 'reactstrap'
import { InputForm } from './subcomponents/InputForm'

export const ContactData = () => {
    return (
        <>
            <h6 className="heading-small text-muted">Jefatura solicitante</h6>
            <Row className="p-lg-4">
                <InputForm label="Nombre" formValue="cliente" formAttr="contacto" lg="12" xl="12" />
                <InputForm label="Email" formValue="cliente" formAttr="mail" type="email" />
                <InputForm label="Teléfono" formValue="cliente" formAttr="telefono" />
            </Row>
        </>
    )
}
