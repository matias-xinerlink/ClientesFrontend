import React, { useContext } from 'react'
import { Col, Input, Label } from 'reactstrap';
import { FormContext } from '../../../../pages/NewRequestPage';

export const InputForm = ({ label, extraLabel = '', formValue, formAttr, type = 'text', xl = "6", lg = "6" }) => {

    const { formdata, setFormdata } = useContext(FormContext);

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
    }

    return (
        <Col lg={lg} xl={xl} className="mb-3">
            <Label className="form-control-label">{label + ' ' + extraLabel}</Label>
            <Input className="styleInput" type={type} name={formValue} value={formdata.formValue} onChange={handleInputChange} required />
        </Col>
    )
}
