import React from 'react'
import { Field, Form } from 'react-final-form'
import encode from 'jwt-encode'
import { jwt_secret } from '../utils/auth'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row, Form as BsForm, Button, FloatingLabel, Alert } from 'react-bootstrap'

export default function Login() {
    const navigate = useNavigate()
    const onSubmit = (values) => {
        const token = encode(values, jwt_secret)
        localStorage.setItem('token', token)
        navigate('/dashboard')
    }

    const validateForm = (values) => {
        let errors = {}
        if (!values.Username) {
            errors['Username'] = "Please Enter Username"
        }
        if (!values.Password) {
            errors['Password'] = "Please Enter Password"
        }
        return errors
    }

    return (
        <Container>
            <Form
                onSubmit={onSubmit}
                validate={validateForm}
                render={({ handleSubmit, values }) => (
                    <>
                        <Row>
                            <Col md={6}>
                                <form onSubmit={handleSubmit}>
                                    <Field name='Username'>
                                        {({ input, meta }) => (
                                            <BsForm.Group className="mb-3" controlId="BsFormBasicEmail">
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Username"
                                                    className="mb-3"
                                                >
                                                    <BsForm.Control type="text" placeholder='Enter Username' {...input} />
                                                </FloatingLabel>
                                                {meta.touched && meta.error && (
                                                    <Alert key='danger' variant='danger'>
                                                        {meta.error}
                                                    </Alert>
                                                )}
                                            </BsForm.Group>

                                        )}
                                    </Field>
                                    <Field name='Password'>
                                        {({ input, meta }) => (
                                            <BsForm.Group className="mb-3" controlId="BsFormBasicEmail">
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Password"
                                                    className="mb-3"
                                                >
                                                    <BsForm.Control type="password" placeholder='Enter Password' {...input} />
                                                </FloatingLabel>
                                                {meta.touched && meta.error && (
                                                    <Alert key='danger' variant='danger'>
                                                        {meta.error}
                                                    </Alert>
                                                )}
                                            </BsForm.Group>
                                        )}
                                    </Field>
                                    <Button variant='outline-primary' type='submit' className='mx-auto'>
                                        Login
                                    </Button>


                                </form>
                            </Col>
                        </Row>
                    </>
                )}
            />

        </Container>
    )
}
