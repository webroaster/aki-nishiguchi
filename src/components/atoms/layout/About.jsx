import React from 'react';
import styled from "styled-components";
import { ProfileText } from '../../organisms/about/ProfileText';
import { FadeUp } from '../animation/FadeUp';

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
`
const SFlex = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 520px) {
        flex-direction: column;
    }
`
const SProfileImage = styled.div`
    width: 240px;
    height: 320px;

    @media screen and (max-width: 520px) {
        margin-bottom: 30px;
    }

    & * {
        width: 100%;
        height: 100%;
    }
`

export const About = () => {
    return(
        <SSection>
            <SContainer id="about">
                <SFlex>
                    <FadeUp>
                        <SProfileImage>
                            <img src="/static/68e54e20cfb66ea5cf478e338183404b/profile.jpg" alt="自己紹介写真" />
                        </SProfileImage>
                    </FadeUp>
                    <ProfileText />
                </SFlex>
            </SContainer>
        </SSection>
    )
}
