import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { DashboardLayout } from './DashboardLayout'
import { HomePage } from '../pages/HomePage'
import { AllRequestPage } from '../pages/AllRequestPage'
import { NewRequestPage } from '../pages/NewRequestPage'
import { CandidatesPage } from '../pages/CandidatesPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { StaffingPage } from '../pages/StaffingPage'
import { ManagementPage } from '../pages/ManagementPage'
import { LoginPage } from '../pages/LoginPage'
import { AuthProvider } from '../auth/AuthProvider'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { RequisitionPage } from '../pages/Requisitions/RequisitionPage'

export const AppRouter = () => {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <PublicRouter path='/login' component={LoginPage} />
                    <PrivateRouter>
                        <DashboardLayout>
                            <Switch>
                                <Route path="/inicio" exact component={HomePage} />
                                <Route path="/solicitudes" exact component={AllRequestPage} />
                                <Route path="/solicitudes/:requisition" exact component={RequisitionPage} />
                                <Route path="/nueva-solicitud" exact component={NewRequestPage} />
                                <Route path="/candidatos" exact component={CandidatesPage} />
                                <Route path="/proyectos" exact component={ProjectsPage} />
                                <Route path="/dotacion" exact component={StaffingPage} />
                                <Route path="/gestion" exact component={ManagementPage} />

                                <Redirect to="/inicio" />
                            </Switch>
                        </DashboardLayout>
                    </PrivateRouter>
                </Switch>
            </AuthProvider>
        </Router>
    )
}
