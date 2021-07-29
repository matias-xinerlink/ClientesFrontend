import React, { useEffect, useRef } from 'react'
import { Redirect, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Header } from '../components/Headers/Header';
import { DashboardNavbar } from '../components/Navbars/DashboardNavbar'
import { Sidebar } from '../components/Sidebars/Sidebar'
import { HeaderNav } from '../components/Navigations/HeaderNav'
import { CardStats } from '../components/Cards/CardStats';
import { DashboardFooter } from '../components/Footers/DashboardFooter';
import { useAuth } from '../auth/useAuth';

export const DashboardLayout = ({ children }) => {

    const mainContent = useRef(null);
    const location = useLocation();
    const { isLogged } = useAuth();

    
    const isLocationHome = () => location.pathname === '/inicio';
    
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);
    
    if (!isLogged()) return <Redirect to={{ pathname: '/login', state: { from: location } }} />

    return (
        <div>
            <Sidebar />
            <div className="main-content" ref={mainContent}>
                <DashboardNavbar />
                <Header>
                    {
                        isLocationHome() &&
                        (
                            <>
                                <HeaderNav />
                                <CardStats title="Hola Mundo" value="1,323" color="danger" porcent="32.12" description="Desde ayer" icon="fa-chart-bar" />
                                <CardStats title="Hola Mundo" value="1,323" color="warning" porcent="32.12" description="Desde ayer" icon="fa-chart-bar" />
                                <CardStats title="Hola Mundo" value="1,323" color="success" porcent="32.12" description="Desde ayer" icon="fa-chart-bar" />
                                <CardStats title="Hola Mundo" value="1,323" color="info" porcent="32.12" description="Desde ayer" icon="fa-chart-bar" />
                            </>
                        )
                    }
                </Header>
                <Container className={isLocationHome() ? 'mt--7' : 'mt--8'} fluid>
                    {children}
                    <DashboardFooter />
                </Container>
            </div>
        </div>
    )
}
