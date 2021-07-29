import React, { useContext } from 'react'
import { Col, Label } from 'reactstrap'
import AsyncSelect from 'react-select/async';
import { customStyles } from './styles'
import { FormContext } from '../../../../pages/NewRequestPage';
import { config } from '../../../../config/env';


export const SpecialInput = ({ label, extraLabel = '', formValue, xl = "6", lg = "6" }) => {

    const { formdata, setFormdata } = useContext(FormContext);
    const handleChange = (response) => {
        setFormdata({ ...formdata, [formValue]: response ? response.label : null, [formValue + 'Id']: response ? response.value : null })
    }

    const loadOptions = (inputValue) => {

        if(inputValue === '') return false;

        return fetch(`${config.apiUrl}/comunas/${inputValue}`, { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                return result.locations.map(option => {
                    return { value: option.location_code, label: option.location_string }
                })
            })
            .catch(error => console.log('[Error]', error));

    };

    return (
        <Col lg={lg} xl={xl} className="mb-3">
            <Label className="form-control-label">{label + ' ' + extraLabel}</Label>
            <AsyncSelect cacheOptions defaultOptions loadOptions={loadOptions} placeholder="Escribe para buscar..." styles={customStyles} onChange={handleChange} />
        </Col>
    )
}
