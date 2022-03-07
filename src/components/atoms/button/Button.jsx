import React from 'react';
import styled from "styled-components";

export const Button = (props) => {
    const {url, children} = props;
    return(
        <SFvButton href={url}>{children}</SFvButton>
    )
}

const SFvButton = styled.a`
    margin-top: 40px;
    border-radius: 12px;
    font-size: 1.6rem;
    letter-spacing: 0.1em;
    color: #DADCDD;
    display: block;
    text-align: center;
    border: 1px solid #d3d3d4;
    padding: 15px 80px;
    transition: .2s ease-in-out;
    opacity: 0;
    animation: FadeIn;
    animation-duration:1s;
    animation-fill-mode:forwards;
    animation-delay: 1.3s;

    @media screen and (max-width: 520px) {
        font-size: 1.4rem;
        padding: 15px 12px;
        width: 95%;
        margin-top: 24px;
    }

    &:hover {
        background-color: #d3d3d4;
        color: #212529;
    }
`
