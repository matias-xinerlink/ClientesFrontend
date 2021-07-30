import React from 'react'
import { TitleAndText } from '../../others/TitleAndText'
import { Row } from 'reactstrap'

export const ReemplazoData = ({ data }) => {
    return (
        <>
            <hr className="mt-2" />
            <h6 className="heading-small text-muted">Datos del trabajador a reemplazar</h6>
            <Row>
                <TitleAndText title="Nombre" text={data.nombre_reemplazo} />
                <TitleAndText title="RUT" text={data.rut_reemplazo} />
                <TitleAndText title="Motivo de Reemplazo" text={data.motivo_reemplazo} />
                <TitleAndText title="Observaciones" text={data.observaciones_reemplazo} />
            </Row>
        </>
    )
}
