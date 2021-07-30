import React from 'react'
import { Badge } from 'reactstrap'

export const RequisitionStatusBadge = ({ status }) => {
    return (
        <Badge color="" className="badge-dot mr-4">
            <i className={`bg-${status === "Pendiente de Aprobación" ? 'warning' : 'primary'}`} />
            {status}
        </Badge>
    )
}
