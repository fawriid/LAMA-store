import { css } from 'styled-components'

export const responsive768 = (props) => {
    return css`
        @media screen and (max-width:768px) {
            ${props}
        }
    `
}

export const responsive500 = (props) => {
    return css`
        @media screen and (max-width: 500px) {
            ${props}
        }
    `;
};