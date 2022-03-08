import React from 'react';
import styled from "styled-components";

const SCont = styled.a`
display: block;
position: relative;
width: calc((100% - 30px) / 3);
height: 210px;
background: #eee;
cursor: pointer;
transition: 0.2s ease-in-out;

@media screen and (max-width: 820px) {
    width: calc((100% - 30px) / 2);
    background: #000;

    &:nth-of-type(n + 3) {
        margin-top: 25px;
    }


    @media screen and (max-width: 520px) {
        width: 100%;
        &:nth-of-type(n + 2) {
            margin-top: 25px;
        }
    }
}

&:nth-of-type(n + 4) {
    margin-top:25px;
}

& > img {
    transition: 0.2s ease-in-out;
    pointer-events: none;

    @media screen and (max-width: 820px) {
        opacity: 0.4;
    }
}

& > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 30px;
    color: #fff;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-15px);
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 820px) {
        transform: translateY(0);
        opacity: 1;
        padding: 20px;
    }

    & > h3 {
        letter-spacing: normal;
        font-size: 1.8rem;
        margin-bottom: 30px;
        margin-top: 20px;
        font-weight: bold;
        text-align: center;
    }

    & > p {
        font-size: 1.6rem;
        margin-bottom: 6px;
    }
}

&:hover {
    background: #000;
    & > img {
        opacity: 0.2;
    }
    & > div {
        transform: translateY(0);
        opacity: 1;
    }
}
`

export const WorksCont = (props) => {
    const {worksImg, title, text, url} = props;
    return(
        <SCont href={url} target="_blank" rel="noopener noreferrer">
            {worksImg}
            <div>
                <h3>{title}</h3>
                {text}
            </div>
        </SCont>
    )
}
