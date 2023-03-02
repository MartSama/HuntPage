import Link from 'next/link'
import React from 'react'
import styled from '@emotion/styled'

const Navi = styled.nav`
    padding-left: 2rem;

    a{
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gray2);
        font-family: "PT Sans", sans-serif;
        &:last-of-type{
            margin-right: 0;
        }
        &:hover{
            color: white;
        }
    }
`

const Nav = () => {
    return (
        <Navi>
            <Link href={'/'} >Home</Link>
            <Link href={'/trending'} >Trending</Link>
            <Link href={'/new-product'} >New Product</Link>
        </Navi>
    )
}

export default Nav