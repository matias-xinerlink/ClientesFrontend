import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export const CandidateActions = ({ candidate, permissions }) => {

    const { file, approval, documents, evaluation } = permissions;

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
                {
                    file &&
                    <DropdownItem>
                        Ver Ficha
                    </DropdownItem>
                }
                {
                    documents &&
                    <DropdownItem>
                        Ver Documentos
                    </DropdownItem>
                }
                {
                    evaluation &&
                    <DropdownItem>
                        Ver Evaluación
                    </DropdownItem>
                }
                {
                    approval &&
                    <DropdownItem>
                        Aprobar/Rechazar
                    </DropdownItem>
                }
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}
