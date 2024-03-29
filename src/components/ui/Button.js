import styled from "@emotion/styled";

const Button = styled.button`
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem; 
    border-radius: 1rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? '#DA552F' : 'white'};
    color: ${props => props.bgColor ? 'white' : '#000'};
    &:last-of-type{
        margin-right: 0rem;
    }

    &:hover{
        background-color: darkred;
    }
`

export default Button;