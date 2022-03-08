import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import { Title } from '../title/Title';

const SSection = styled.section`
    position: relative;
    background: #fff;
`
const SContainer = styled.div`
    width: 95%;
    max-width: 850px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
`
const SText = styled.p`
    font-size: 1.4rem;
    text-align: center;
    letter-spacing: 0.1em;
    line-height: 1.6em;
`
const SSfontAwesomeIcon = styled(FontAwesomeIcon)`
    color:#fff;
    font-size: 4rem;
`
const SFlex = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 50px;
    max-width: 320px;
    margin: 50px auto 0;
    padding: 10px: 30px;
    border-radius: 12px;
    background-color: #00acee;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #0980e5;
    }

    & > span {
        display: block;
        font-size: 1.8rem;
        color: #fff;
        margin-left: 30px;
    }
`

export const Contact = () => {
    return(
        <SSection id="contact">
            <SContainer>
                <Title title={"Contact"} subTitle={"お気軽にお問合せください"} />
                <SText>
                    お問い合わせは現在TwitterのDMからのみ受け付けております。<br />
                    当サイトからの問い合わせと言う事と、お問合せ内容を記載の上送信お願い申し上げます。
                </SText>
                <SFlex href="https://twitter.com/web_roaster" target="_blank" rel="noopener noreferrer">
                    <SSfontAwesomeIcon icon={faTwitterSquare} />
                    <span>Click</span>
                </SFlex>
            </SContainer>
        </SSection>
    )
}
