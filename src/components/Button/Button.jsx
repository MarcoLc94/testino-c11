/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

const color = 'white';

function Button ({children}){
    return <button css={css`
    padding: 80px;
    background-color: hotpink;
    &:hover {
        color: ${color};
    }
    `}>{children}</button>
};

export default Button