import React from 'react'
import { TitleAndText } from '../../others/TitleAndText'
import { Row } from 'reactstrap'

export const MainData = ({ data }) => {
    return (
        <Row>
            <TitleAndText title="Ubicación" text={data.region} completerow />
            <TitleAndText title="Sucursal Xinerlink" text={data.sucursal} />
            <TitleAndText title="Servicio" text={data.servicio} />
            <TitleAndText title="Causal" text={data.causal} />
            <TitleAndText title="Informes Requeridos" text={JSON.parse(data.informes_requeridos)} multy />
            <TitleAndText title="Proyecto" text={data.project} />
            <TitleAndText title="Vertical" text={data.vertical.replace('GP -', '')} />
            <TitleAndText title="Observaciones" text={data.observaciones} completerow />
        </Row>
    )
}
