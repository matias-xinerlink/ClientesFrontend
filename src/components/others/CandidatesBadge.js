import React from 'react'
import { Badge, Spinner } from 'reactstrap'
import { config } from '../../config/env'
import { useFetch } from '../../hooks/useFetch'

export const CandidatesBadge = ({ requisitionId }) => {

    const { data, loading } = useFetch(`${config.apiUrl}/candidatos/${requisitionId}`)

    if (loading) return <Spinner color="light" size="sm" />

    return (
        <Badge color={data.candidates.length === 0 ? 'secondary' : 'success'} pill>
            {data.candidates.length} Candidatos
        </Badge>
    )
}
