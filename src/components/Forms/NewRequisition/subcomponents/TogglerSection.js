import React from 'react'

export const TogglerSection = ({ toggle, title }) => {
    return (
        <div className="d-flex align-items-center mb-4">
            <span className="mr-4 pb-2">{title}</span>
            <label className="custom-toggle">
                <input type="checkbox" onChange={toggle} />
                <span className="custom-toggle-slider rounded-circle" />
            </label>
        </div>
    )
}
