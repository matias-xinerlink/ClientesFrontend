import React, { useContext } from 'react'
import Select from 'react-select'
import { customStyles } from './styles'
import data from '../camposFormulario.json'
import { FormContext } from '../../../../pages/NewRequestPage'
import { Col, Label } from 'reactstrap'

export const SelectorForm = ({ label, extraLabel = '', formValue, formAttr, isClearable = true, isSearchable = false, isMulti = false, xl = "6", lg = "6" }) => {

    const { formdata, setFormdata } = useContext(FormContext);
    const item = data.find(item => item.title === label);

    const options = item.options.map(option => {
        return { value: option.id.toString(), label: option.title.replace('GP -', '') }
    })

    const handleChange = (response) => {
        if (isMulti) {
            setFormdata({ ...formdata, [formValue]: response.map(item => { return { name: item.label } }), [formValue + 'Id']: response.map(item => { return { id: item.value } }) })
        }
        else if (formAttr) {
            setFormdata({ ...formdata, [formValue]: { ...formdata.[formValue], [formAttr]: response ? response.label : null, [formAttr + 'Id']: response ? response.value : null } })
        }
        else setFormdata({ ...formdata, [formValue]: response ? response.label : null, [formValue + 'Id']: response ? response.value : null })
    }


    return (
        <Col lg={lg} xl={xl} className="mb-3">
            <Label className="form-control-label">{label + ' ' + extraLabel}</Label>
            <Select options={options} styles={customStyles} isSearchable={isSearchable} placeholder="" name={formValue} isClearable={isClearable} onChange={handleChange} isMulti={isMulti} />
        </Col>
    )
}
