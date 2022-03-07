import React from 'react';
import styled from "styled-components";

export const ServiceCont = (props) => {
    const {title, text, icon} = props;
    return(
        <SServiceCont>
            <SIcon>
                {icon}
            </SIcon>
            <STitle>{title}</STitle>
            <SLine></SLine>
            {text}
        </SServiceCont>
    )
}
const SServiceCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 290px;
    padding: 25px;
    background-color: #fff;

    &:hover {
        span {
            width: 80px;
        }
    }

    p {
        letter-spacing: 0.2em;
        font-size: 1.4rem;
        line-height: 1.6em;
        color: #282F35;
    }
`
const SIcon = styled.div`
    margin-bottom: 30px;
`
const STitle = styled.h3`
    color: #282F35;
    font-size: 1.17em;
    font-weight: bold;
    transition: 0.2s ease-in-out;
`
const SLine = styled.span`
    margin-top: 15px;
    margin-bottom: 15px;
    display: inline-block;
    background-color: #E5BB09;
    height: 2px;
    width: 30px;
    transition: 0.2s ease-in-out;
`
