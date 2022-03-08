import React from 'react';
import styled from "styled-components";

const STitle = styled.h2`
    position: relative;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 30px;
    padding: 10px 16px;

    @media screen and (max-width: 520px) {
        font-size: 1.6rem;
    }

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        display: inline-block;
        background-color: #E5BB09;
        height: 100%;
        width: 3px;
        border-radius: 5px;
    }
`

export const SecondaryTitle = (props) => {
    const {title} = props;
    return(
        <STitle>{title}</STitle>
    )
}
