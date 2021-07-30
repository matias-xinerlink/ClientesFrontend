import React, { useContext, useState } from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap';
import { rutEsValido } from '../../../../helpers/verificarRut';
import { FormContext } from '../../../../pages/NewRequestPage';

export const InputForm = ({ label, extraLabel = '', formValue, formAttr, type = 'text', xl = "6", lg = "6", setError }) => {

    const { formdata, setFormdata } = useContext(FormContext);
    const [rutError, setRutError] = useState(false)

    const handleInputChange = ({ target }) => {
        if (formAttr) {
            setFormdata({ ...formdata, [formValue]: { ...formdata.[formValue], [formAttr]: target.value } })
        }
        else if (type === "file") {
            var newObject = {
                'lastModified': target.files[0].lastModified,
                'lastModifiedDate': target.files[0].lastModifiedDate,
                'name': target.files[0].name,
                'size': target.files[0].size,
                'type': target.files[0].type
            };
            setFormdata({ ...formdata, [formValue]: newObject });
        }
        else {
            setFormdata({ ...formdata, [formValue]: type === "number" ? parseInt(target.value) : target.value });
        }

        if (label === 'RUT') {
            if (rutEsValido(target.value)) {
                setError(false);
                setRutError(false)
            }
            else {
                setError('Parece que uno de los RUT introducidos en el formulario es inválido, por favor revisa nuevamente.');
                setRutError(true)
            }
        }

    }

    return (
        <Col lg={lg} xl={xl} className="mb-3">
            <Label className="form-control-label">{label + ' ' + extraLabel}</Label>
            {
                label === 'RUT' ?
                    <FormGroup className={`${rutError && 'has-danger'}`}>
                        <Input className={`styleInput ${rutError && 'is-invalid'}`} type={type} name={formValue} value={formdata.formValue} onChange={handleInputChange} required />
                    </FormGroup>
                    :
                    <Input className="styleInput" type={type} name={formValue} value={formdata.formValue} onChange={handleInputChange} required />
            }
        </Col>
    )
}
