import React from 'react'
import styled from '@emotion/styled'
import Layout from '../src/components/layout/Layout'
import { css } from '@emotion/react'
import { Form, Field, InputSubmit } from '../src/components/ui/Form'
import useValidation from '../hooks/useValidation'
import validateCreateAccount from '../validation/validateCreateAccount'
const Heading = styled.h1`
  color: red
`


export default function CreateAccount() {
    const initialState = {
        name: '',
        email: '',
        password: ''
    }

    function createAccount() {
        console.log("Creating account...");
    }

    const { values,
        errors,
        submitForm,
        handleSubmit,
        handleChange } = useValidation(initialState, validateCreateAccount, createAccount)

    const { name, email, password } = values

    return (
        <div >
            <Layout>
                <>
                    <h1 css={css`
                    text-align: center;
                    margin-top: 5rem;
                    font-family: 'PT Sans', sans-serif;
                    `}>Create account</h1>
                    <Form autoComplete='off' onSubmit={handleSubmit}>
                        <Field>
                            <label htmlFor='name'>Name</label>
                            <input
                                id='name'
                                type={'text'}
                                value={name}
                                onChange={handleChange}
                            />
                        </Field>
                        <Field>
                            <label htmlFor='email'>Email</label>
                            <input
                                id='email'
                                type={'email'}
                                placeholder='eg tony@martinez.com...'
                                name={'email'}
                                value={email}
                                onChange={handleChange}
                            />
                        </Field>
                        <Field>
                            <label htmlFor='password'>Password</label>
                            <input

                                id='password'
                                type={'password'}
                                placeholder='eg tonyMar_cr...'
                                name={'password'}
                                value={password}
                                onChange={handleChange}
                            />
                        </Field>

                        <InputSubmit type={'submit'} value='Create account' />
                    </Form>
                </>
            </Layout>
        </div>
    )
}
