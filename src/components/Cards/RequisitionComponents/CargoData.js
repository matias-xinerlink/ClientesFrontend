import React from 'react'
import moment from 'moment'
import { Row } from 'reactstrap'
import { TitleAndText } from '../../others/TitleAndText'

export const CargoData = ({ data }) => {
    return (
        <>
            <hr className="mt-2" />
            <h6 className="heading-small text-muted">Antecedentes del Cargo</h6>
            <Row>
                <TitleAndText title="Cargo" text={data.cargo_solicitado} />
                <TitleAndText title="Vacantes" text={data.vacancies} />
                <TitleAndText title="Fecha de inicio estimada" text={moment(data.fecha_inicio).format('LLL')} />
                <TitleAndText title="Fecha de termino estimada" text={moment(data.fecha_fin).format('LLL')} />
                <TitleAndText title="Renta Líquida" text={data.renta} />
                <TitleAndText title="Tipo de Contrato" text={data.contrato} />
                <TitleAndText title="Plazo" text={data.plazo} />
                <TitleAndText title="Renovación" text={data.renovacion} />
                <TitleAndText title="Requisitos" text={data.requisitos} />
                <TitleAndText title="Funciones" text={data.funciones} />
                <TitleAndText title="Detalle de Horarios" text={data.detalle_horarios} />
                <TitleAndText title="Beneficios" text={data.beneficios} />
            </Row>
        </>
    )
}
