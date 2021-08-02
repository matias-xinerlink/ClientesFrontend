import React from 'react'
import { Badge } from 'reactstrap'
import { config } from '../../config/env'

export const RequisitionStatusBadge = ({ status }) => {
    return (
        <Badge color="" className="badge-dot mr-4">
            <i className={`bg-${status === config.statusDefault ? 'warning' : 'primary'}`} />
            {status}
        </Badge>
    )
}
