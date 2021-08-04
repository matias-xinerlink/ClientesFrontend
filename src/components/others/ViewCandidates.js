import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

export const ViewCandidates = ({ requisitionId }) => {
    return (
        <Button tag={Link} to={`/candidatos/${requisitionId}`} color="secundary" size="sm">
            Ver Mas
        </Button>
    )
}
