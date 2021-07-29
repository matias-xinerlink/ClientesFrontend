import React from 'react'
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Media } from "reactstrap";
import { useAuth } from '../../auth/useAuth';
import { UserAvatar } from '../others/UserAvatar';

export const UserDropdown = ({ showName = false }) => {

    const { user, logout } = useAuth();

    return (
        <UncontrolledDropdown nav>
            <DropdownToggle nav>
                <Media className="align-items-center">
                    <UserAvatar user={user}/>
                    {
                        showName && (
                            <Media className="ml-2 d-none d-lg-block">
                                <span className="mb-0 text-sm font-weight-bold">
                                    {user.username}
                                </span>
                            </Media>
                        )
                    }
                </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}
