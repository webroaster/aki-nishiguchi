import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCode, faComments } from "@fortawesome/free-solid-svg-icons";

import { Title } from '../title/Title';
import { ServiceCont } from '../../molecules/service/ServiceCont';
import { Skills } from './Skills';
import { FadeInLeft } from "../animation/FadeInLeft";
import { FadeInRight } from '../animation/FadeInRight';

export const Service = () => {
    const title = "Service";
    const SubTitle = "サービス内容";
    const Service1Text = <p>打ち合わせを元に、企画・設計・デザイン・構築いたします。<br />WordPressを使用したメディア製作なども可能です。<br />サーバー・ドメインについてもお気軽にご相談ください。</p>;
    const Service2Text = <p>素早い返信、専門用語を極力抑える、密にコミュニケーションをとることで、「不安」「負担」をなくします。<br />LINE, Chatwork, Slack, Zoomなどさまざまなツールに対応いたします。</p>;
    const iconStyle = {
        fontSize: "3rem",
        color: "#E5BB09",
        fontWeight: "900",
    }
    const icon1 = <FontAwesomeIcon icon={faCode} style={iconStyle} />
    const icon2 = <FontAwesomeIcon icon={faComments} style={iconStyle} />
    return(
        <SSection>
            <SContainer id="service">
                <Title title={title} subTitle={SubTitle} />
                <SServiceInner>
                    <FadeInLeft>
                        <ServiceCont title={"HP・LP制作"} text={Service1Text} icon={icon1} />
                    </FadeInLeft>
                    <FadeInRight>
                        <ServiceCont title={"コミュニケーション"} text={Service2Text} icon={icon2} />
                    </FadeInRight>
                </SServiceInner>
            </SContainer>
            <Skills />
        </SSection>
    )
}

const SSection = styled.section`
    position: relative;

    &::before {
        content: "";
        display: block;
        position: sticky;
        z-index: -1;
        top: 0;
        height: 100vh;
        background: url(/static/d55ce8db67f2682614e0d23750d0b35f/service-bgi.jpg) no-repeat center / cover;
    }
`
const SContainer = styled.div`
    width: 95%;
    max-width: 800px;
    margin: 0 auto;
    z-index: 1;
    padding-top: 100px;
    padding-bottom: 100px;
`
const SServiceInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 520px) {
        overflow: hidden;
        flex-direction: column;
    }
`
