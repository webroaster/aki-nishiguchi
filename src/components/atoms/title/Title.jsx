import React from 'react';
import styled from "styled-components";

export const Title = (props) => {
    const {title, subTitle} = props;
    return(
        <>
            <SFlex>
                <STitle>{title}</STitle>
                <SSubTitle>{subTitle}</SSubTitle>
            </SFlex>
        </>
    )
}

const SFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    mix-blend-mode: difference;

    & + * {
        margin-top: 30px;
    }
`
const STitle = styled.h2`
    font-size: 2.8rem;
    font-weight: bold;
    letter-spacing: 0.2em;
    margin-bottom: 10px;
    color: #d7d0ca;
    font-family: 'Source Sans Pro', sans-serif;

    @media screen and (max-width: 520px) {
        font-size: 2.6rem;
    }

`
const SSubTitle = styled.p`
    letter-spacing: 0.1em;
    font-size: 1.4rem;
    margin-bottom: 30px;
    color: #d7d0ca;

    @media screen and (max-width: 520px) {
        font-size: 1.2rem;
    }

    &::before,
    &::after {
        content: "";
        display: inline-block;
        width: 80px;
        height: 2px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 6px;
        background-color: #d7d0ca;

        @media screen and (max-width: 520px) {
            width: 60px;
        }
    }
`
