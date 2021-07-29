import React from 'react'
import { Row } from 'reactstrap'
import { InputForm } from './subcomponents/InputForm';
import { SelectorForm } from './subcomponents/SelectorForm';
import { SpecialInput } from './subcomponents/SpecialInput';

export const MainData = () => {


    return (
        <>
            <h6 className="heading-small text-muted">Datos de la solicitud</h6>
            <Row className="p-lg-4">
                <SelectorForm label="Tipo de Servicio" formValue="servicio" />
                <SelectorForm label="Causal" extraLabel="de la solicitud (Ley 20.123)" formValue="causal" />
                <SelectorForm label="Informes y evaluaciones requeridas" formValue="informes_requeridos" isMulti />
                <InputForm label="Proyecto" formValue="project" />
                <SelectorForm label="Vertical" formValue="vertical" isSearchable />
                <SpecialInput label="Comuna" formValue="region" />
                <SelectorForm label="Sucursal" extraLabel="Xinerlink más cercana al sitio de trabajo" formValue="sucursal" isSearchable />
                <InputForm label="Observaciones" type="textarea" formValue="observaciones" />
            </Row>
        </>
    )
}
