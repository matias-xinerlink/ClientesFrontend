import React from 'react'
import { TitleAndText } from '../../others/TitleAndText'
import { Row } from 'reactstrap'

export const ReferredData = ({ data }) => {
    return (
        <>
            <hr className="mt-2" />
            <h6 className="heading-small text-muted">Datos del referido/reemplazante</h6>
            <Row>
                <TitleAndText title="Nombre" text={data.nombre_referido} />
                <TitleAndText title="RUT" text={data.rut_referido} />
                <TitleAndText title="Email" text={data.mail_referido} />
                <TitleAndText title="Teléfono" text={data.tlf_referido} />
            </Row>
        </>
    )
}
