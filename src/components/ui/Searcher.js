import { css } from '@emotion/react';
import styled from '@emotion/styled'
const InputText = styled.input`
    border: 1px solid var(--gray2);
    padding: 1rem;
    min-width: 300px;
    border-radius: 1rem;
`;

const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/look.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: white;
    border: none;
    text-indent: -9999px;
    &:hover{
        cursor: pointer
    }
`;

const Searcher = () => {
    return (
        <form css={css`
        position:relative;
        `}>
            <InputText type="text" placeholder='Look for...' />
            <InputSubmit type='submit'>Lupa</InputSubmit>
        </form>
    )
}

export default Searcher