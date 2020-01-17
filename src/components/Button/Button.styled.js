import styled from 'styled-components';

export const ButtonTheme = styled.button`
    width: 35%;
    font-size: 20px;
    background: #ff3000;
    border: 0;
    color: #fff;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: #d22700;
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 800px) {
        width: 50%;
        font-size: 16px;
    }
`