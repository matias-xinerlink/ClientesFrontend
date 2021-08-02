import React from 'react'
import { Link } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { useAuth } from '../../auth/useAuth'
import { approvalId, approveRequest, isApproval } from '../../helpers/isApproval'

export const RequisitionsActions = ({ requisition }) => {

    const { user } = useAuth()
    const handleApproval = async () => {
        const result = await approveRequest(approvalId(requisition.approvals, user))
        if (result) {
            window.location.reload();
        }
    }

    return (
        <UncontrolledDropdown>
            <DropdownToggle
                className="btn-icon-only text-light"
                role="button"
                size="sm"
                color=""
            >
                <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">¿Qué deseas hacer?</h6>
                </DropdownItem>
                <DropdownItem tag={Link} to={'/solicitudes/' + requisition.id}>
                    Ver Solicitud
                </DropdownItem>
                {
                    (requisition.approvals.length > 0 && isApproval(requisition.approvals, user))
                    &&
                    <DropdownItem onClick={handleApproval}>
                        Aprobar Solicitud
                    </DropdownItem>
                }
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}
