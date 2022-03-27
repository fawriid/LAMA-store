import { css } from 'styled-components'

export const responsive768 = (styles) => {
    return css`
        @media screen and (max-width:768px) {
            ${styles}
        }
    `
}

export const responsive500 = (styles) => {
    return css`
        @media screen and (max-width: 500px) {
            ${styles}
        }
    `;
};