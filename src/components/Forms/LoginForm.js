import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Fade, Alert } from "reactstrap";
import { useAuth } from '../../auth/useAuth';
import { useForm } from '../../hooks/useForm';

export const LoginForm = () => {

    const [checking, setChecking] = useState(false);
    const location = useLocation();
    const [error, setError] = useState(null)
    const { login } = useAuth();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const { email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        setChecking(true);
        const userCredentials = JSON.stringify({ "email": formValues.email, "password": formValues.password });
        login(userCredentials, location.state?.from, setError, setChecking)
    }

    return (
        <Form role="form" onSubmit={handleSubmit} className="mt-5">
            <FormGroup className="mb-3">
                <InputGroup className="">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="ni ni-email-83" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email"  name="email" value={email} onChange={handleInputChange} required />
                </InputGroup>
            </FormGroup>
            <FormGroup className="">
                <InputGroup className="">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Contraseña" type="password"  name="password" value={password} onChange={handleInputChange} required />
                </InputGroup>
            </FormGroup>
            <div className="text-center">
                <Input className="my-4 btn btn-primary btn-block" type="submit" value={checking ? 'Espere...' : 'Ingresar'} disabled={checking} />
            </div>
            <Fade in={!!error}>
                <Alert color="danger">
                    {error}
                </Alert>
            </Fade>
        </Form>
    )
}
