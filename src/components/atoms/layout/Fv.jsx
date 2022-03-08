import React from 'react';
import styled from "styled-components";

import { Button } from '../button/Button';

const SFv = styled.div`
    position: relative;
    height: 700px;

    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        z-index: -10;
        width: 100vw;
        height: 700px;
        opacity: 0.5;
        background: url(/static/e58c7ee6c79b933b1c9dda1f2394e14d/fv.jpg) no-repeat center / cover;
    }
`
const SFvLogo = styled.div`
    position: absolute;
    bottom: 177px;
    left: 120px;
    color: #DADCDD;
    z-index: 1;
    @media screen and (max-width: 820px) {
        left: 10%;
        bottom: 100px;
        @media screen and (max-width: 520px) {
            left: 5%;
        }
    }
`
const SFvTitle = styled.h2`
    color: #DADCDD;
    font-size: 5.6rem;
    letter-spacing: 0.18em;
    font-family: 'Source Sans Pro', sans-serif;
    opacity: 0;
    animation: FadeIn;
    animation-duration:1s;
    animation-fill-mode:forwards;
    animation-delay: 0.3s;

    @media screen and (max-width: 520px) {
        font-size: 4.2rem;
    }
`
const SFvSubTitle = styled.p`
    font-size: 4rem;
    letter-spacing: 0.2em;
    color: #DADCDD;
    font-family: 'Source Sans Pro', sans-serif;
    opacity: 0;
    animation: FadeIn;
    animation-duration:1s;
    animation-fill-mode:forwards;
    animation-delay: 0.8s;

    @media screen and (max-width: 520px) {
        font-size: 2.6rem;
    }
`
const SFvButton = styled(Button)`
    opacity: 0;
    animation: FadeIn;
    animation-duration:1s;
    animation-fill-mode:forwards;
    animation-delay: 1s;
`

export const Fv = () => {
    return(
        <SFv>
            <style>
                {`
                    @keyframes FadeIn {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 100;
                        }
                    }
                `}
            </style>
            <SFvLogo>
                <SFvTitle>AKI NISHIGUCHI</SFvTitle>
                <SFvSubTitle>Web Engineer</SFvSubTitle>
                <Button url={"/#service"}>サービス内容はこちら</Button>
            </SFvLogo>
        </SFv>
    )
}
