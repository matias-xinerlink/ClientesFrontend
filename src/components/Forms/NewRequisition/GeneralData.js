import React from 'react'
import { Row } from 'reactstrap'
import { InputForm } from './subcomponents/InputForm'
import { SelectorForm } from './subcomponents/SelectorForm'

export const GeneralData = () => {
    return (
        <>
            <h6 className="heading-small text-muted">Antecedentes del Cargo</h6>
            <Row className="p-lg-4">
                <InputForm label="Cargo" formValue="cargo_solicitado" />
                <InputForm label="Vacantes" type="number" formValue="vacancies" />
                <InputForm label="Fecha de inicio estimada" type="date" formValue="fecha_inicio" />
                <InputForm label="Fecha de termino estimada" type="date" formValue="fecha_fin" />
                <InputForm label="Renta Líquida aprox." type="number" formValue="renta" />
                <SelectorForm label="Tipo de Contrato" formValue="contrato"/>
                <InputForm label="Plazo" formValue="plazo" />
                <InputForm label="Renovación" formValue="renovacion" />
                <InputForm label="Requisitos" type="textarea" formValue="requisitos" />
                <InputForm label="Funciones" type="textarea" formValue="funciones" />
                <InputForm label="Horarios" type="textarea" formValue="detalle_horarios" />
                <InputForm label="Beneficios" type="textarea" formValue="beneficios" />
                {/* <InputForm label="Otros adjuntos de la solicitud" type="file" formValue="adjuntos" /> */}
            </Row>
        </>
    )
}
