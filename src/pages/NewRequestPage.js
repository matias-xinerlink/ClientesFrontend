import React, { createContext, useState } from 'react'
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
import { NewRequisitionForm } from '../components/Forms/NewRequisitionForm'

export const NewRequestPage = () => {

    return (
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h6 className="text-uppercase text-muted ls-1 mb-1">
                            Solicitudes
                        </h6>
                        <h2 className="mb-0">Nueva Solicitud</h2>
                    </CardHeader>
                    <CardBody>
                        <FormProvider>
                            <NewRequisitionForm />
                        </FormProvider>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export const FormContext = createContext();

const FormProvider = ({ children }) => {

    const [formdata, setFormdata] = useState({
        vacancies: null,
        region: null,
        regionId: null,
        sucursal: null,
        sucursalId: null,
        cargo_solicitado: null,
        project: null,
        vertical: null,
        verticalId: null,
        servicio: null,
        servicioId: null,
        causal: null,
        causalId: null,
        observaciones: null,
        contrato: null,
        contratoId: null,
        plazo: null,
        renovacion: null,
        fecha_inicio: null,
        fecha_fin: null,
        requisitos: null,
        funciones: null,
        beneficios: null,
        renta: null,
        detalle_horarios: null,
        cliente: {
            contacto: null,
            mail: null,
            telefono: null,
        },
        reemplazo: {
            motivo: null,
            motivoId: null,
            nombre: null,
            rut: null,
            observaciones: null,
        },
        referido: {
            nombre: null,
            rut: null,
            mail: null,
            telefono: null,
        },
        informes_requeridos: null,
        informes_requeridosId: null
    })

    const contextValue = {formdata, setFormdata}

    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    )
}
