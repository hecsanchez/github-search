import styled from 'styled-components';

export const InputTheme = styled.input`
    padding: 14px 18px;
    font-size: 30px;
    font-family: 'Lato', sans-serif;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #979797;
    transition: all .3s ease;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #000;
    color: #000;

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 800px) {
        font-size: 20px;
    }
`