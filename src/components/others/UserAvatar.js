import React from 'react'
import { UncontrolledTooltip } from 'reactstrap'

export const UserAvatar = ({ user, tooltip = false }) => {
    return (
        <>
            {
                tooltip ?
                    <>
                        <a className="avatar avatar-sm" href={`#avatar${user.id}`} id={`avatar${user.id}`} onClick={e => e.preventDefault()}>
                            <img alt={user.username} className="rounded-circle" src={`https://ui-avatars.com/api/?name=${user.username}&background=19204D&color=fff`} />
                        </a>
                        <UncontrolledTooltip delay={0} target={`avatar${user.id}`}>
                            {user.username}
                        </UncontrolledTooltip>
                    </>
                    :
                    <span className="avatar avatar-sm rounded-circle">
                        <img alt={user.username} src={`https://ui-avatars.com/api/?name=${user.username}&background=19204D&color=fff`} />
                    </span>
            }
        </>
    )
}
