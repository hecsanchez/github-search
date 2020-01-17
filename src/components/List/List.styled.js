import styled from 'styled-components';

export const ListContainer = styled.div`
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2em 0;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 100px;
        margin-right: 1em;
    }
`

export const ListItem = styled.div`
    border: 1px solid #ebebeb;

    a {
        color: #000;
        display: flex;
        align-items: center;
        text-decoration: none;
        border-bottom: 1px solid #d0d0d0;
        padding: 1em;
        transition: .3s ease all;
        position: relative;

        &:hover {
            background: #fff;
            box-shadow: 0 0px 10px #cccccc;

            .more {
                opacity:1;
            }
        }

        .more {
            opacity: 0;
            position: absolute;
            right: 2em;
            transition: all .3s ease;
        }

        p {
            margin-right: 1em;

            strong {
                line-height: 1;
                font-size: 25px;
                vertical-align: middle;
                display: inline-block;
            }
        }
    }
`