import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const SSnsWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    font-size: 2.5rem;
`
const SName = styled.h3`
    font-size: 2rem;
    font-weight: normal;
    margin-right: 30px;
`
const SSfontAwesomeIcon = styled(FontAwesomeIcon)`
    color:#00acee;
`
const SText = styled.p`
    letter-spacing: 0.2em;
    font-size: 1.8rem;
    line-height: 1.6em;
    margin-bottom: 16px;
    color: #282F35;

    & > span {
        font-weight: bold;
        background: linear-gradient(transparent 70%,#E5BB09 70%);
    }
`

export const Text = () => {
    return(
        <>
            <SSnsWrap>
                <SName>西口　諒</SName>
                <a href="https://twitter.com/web_roaster" target="_blank" rel="noopener noreferrer">
                    <SSfontAwesomeIcon icon={faTwitterSquare} />
                </a>
            </SSnsWrap>
            <SText>
                <span>「責任感」</span> <span>「コミュニケーション」</span><br />
                が私のモットーであり、これを特に大切にクライアント様のお手伝いをさせていただきます。<br />
                <br />
                福岡県を拠点にWeb制作と、コーヒー豆屋さんとして活動しております。
            </SText>
        </>
    )
}
