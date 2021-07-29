import React from 'react'
import { Container, Card, CardBody, Row, Col } from "reactstrap";
import { LoginForm } from '../components/Forms/LoginForm';

export const LoginPage = () => {

    return (
        <>
            <div className="main-content bg-default" style={{ minHeight: '100vh' }}>
                <div className="header bg-gradient-info py-7 py-lg-8">
                    <Container>
                        <div className="header-body text-center mb-3">
                            <Row className="justify-content-center">
                                <Col lg="5" md="6">
                                    <img className="logo-loginpage" src={require("../assets/img/brand/Xinerlink-logo.png").default} alt="Loading" />
                                    <p className="text-lead text-white">
                                        Bienvenido al Portal Clientes de Xinerlink.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <Container className="mt--8 pb-5">
                    <Row className="justify-content-center">
                        <Col lg="5" md="7">
                            <Card className="bg-secondary shadow border-0">
                                <CardBody className="px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Introduce tus credenciales para acceder.</small>
                                    </div>
                                    <LoginForm />
                                </CardBody>
                            </Card>
                            {/* <Row className="mt-3">
                                <Col xs="6">
                                    <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <small>Forgot password?</small>
                                    </a>
                                </Col>
                                <Col className="text-right" xs="6">
                                    <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <small>Create new account</small>
                                    </a>
                                </Col>
                            </Row> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
