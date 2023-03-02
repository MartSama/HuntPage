import Link from 'next/link'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Searcher from '../ui/searcher'
import Nav from './Nav'
import Button from '../ui/Button'
const ContainerHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`

const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight:700;
    font-family: 'Roboto Slap', serif;
    margin-right: 2rem;
`


const Header = () => {
    const user = false;
    return (
        <header
            css={css`
                border-bottom: 2px solid #e1e1e1;
                padding: 1rem 0;
            `}
        >
            <ContainerHeader>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Link href={'/'}>
                        <Logo>P</Logo>
                    </Link>
                    <Searcher />
                    <Nav />
                </div>
                <div css={css`
                    display: flex;
                    align-items: center;
                `}>
                    {user ? (
                        <>
                            <p css={css`
                    margin-right: 2rem;
                    `}>Hola: Mart</p>
                            <Button bgColor='true'>Log out</Button>
                        </>
                    ) : (<>
                        <Link href={'/login'} css={css`margin-right: 1rem`} passHref>
                            <Button>Log In</Button>
                        </Link>
                        <Link href={'/create-account'} passHref>
                            <Button bgColor='true'>Create Account</Button>
                        </Link>
                    </>)}


                </div>
            </ContainerHeader>
        </header>
    )
}

export default Header