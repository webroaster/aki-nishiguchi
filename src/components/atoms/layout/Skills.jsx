import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3Alt, faJsSquare, faWordpress } from "@fortawesome/free-brands-svg-icons";

import { Title } from '../title/Title';
import { SkillsCont } from '../../molecules/skills/SkillsCont';

export const Skills = () => {
    const iconStyle = {
        fontSize: "5rem",
    }
    const icon1 = <FontAwesomeIcon icon={faHtml5} style={iconStyle} />
    const icon2 = <FontAwesomeIcon icon={faCss3Alt} style={iconStyle} />
    const icon3 = <FontAwesomeIcon icon={faJsSquare} style={iconStyle} />
    const icon4 = <FontAwesomeIcon icon={faWordpress} style={iconStyle} />
    return(
        <SSection>
            <SContainer id="skills">
                <Title title={"Skills"} subTitle={"スキル一覧"} />
                <SSkillsInner>
                    <SkillsCont icon={icon1} title={"HTML5"} />
                    <SkillsCont icon={icon2} title={"CSS3"} />
                    <SkillsCont icon={icon3} title={"JavaScript"} />
                    <SkillsCont icon={icon4} title={"WordPress"} />
                </SSkillsInner>
            </SContainer>
        </SSection>
    )
}
const SSection = styled.section`
    background-color: #fff;
`
const SContainer = styled.div`
    width: 95%;
    max-width: 850px;
    margin: 0 auto;
    z-index: 1;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-top: 100px;
    padding-bottom: 100px;
`
const SSkillsInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 520px) {
        flex-wrap: wrap;
    }
`
