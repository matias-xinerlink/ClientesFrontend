import React from 'react'
import { Row } from 'reactstrap'
import { TitleAndText } from '../../others/TitleAndText'

export const JefaturaData = ({ data }) => {
    return (
        <>
            <hr className="mt-2" />
            <h6 className="heading-small text-muted">Jefatura Solicitante</h6>
            <Row>
                <TitleAndText title="Contacto" text={data.contacto_cliente} />
                <TitleAndText title="Email" text={data.mail_cliente} />
                <TitleAndText title="Teléfono" text={data.telefono_cliente} />
            </Row>
        </>
    )
}
