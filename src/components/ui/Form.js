import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react';
const Form = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;
`;

const Field = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label{
        flex: 0 0 150px;
        font-size: 1.8rem;
    }

    input{
        border-radius:1rem;
        padding: 1rem;
        border: 1px solid black;
        width: 100%;
    }
`

const InputSubmit = styled.input`
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-color: var(--orange);
    border: none;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-family: 'PT Sans', sans-serif;
    float: right;

    &:hover {
        cursor: pointer;
    }
`
export { Form, Field, InputSubmit }