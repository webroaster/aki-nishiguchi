import React from 'react';
import styled from "styled-components";

const SSkill = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 520px) {
        width: 50%;

        &:nth-of-type(n + 3) {
            margin-top: 30px;
        }
    }
`
const SSkillTitle = styled.p`
    letter-spacing: 0.2em;
    font-size: 1.8rem;
    line-height: 1.6em;
    color: #282F35;
    font-weight: bold;
    margin-top: 10px;

    @media screen and (max-width: 520px) {
        font-size: 1.4rem;
    }
`

export const SkillsCont = (props) => {
    const {icon, title} = props;
    return(
        <SSkill>
            {icon}
            <SSkillTitle>{title}</SSkillTitle>
        </SSkill>
    )
}
