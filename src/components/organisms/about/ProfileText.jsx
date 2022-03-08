import React from 'react';
import styled from "styled-components";

import { MyName } from '../../molecules/about/MyName';
import { Text } from '../../molecules/about/Text';
import { Title } from "../../atoms/title/Title";
import { FadeUp } from '../../atoms/animation/FadeUp';

const SProfileText = styled.div`
    max-width:510px;
    width: 100%;
    margin-left: 100px;

    @media screen and (max-width: 820px) {
        margin-left: 30px;

        @media screen and (max-width: 520px) {
            margin-left: 0;
        }
    }
`

export const ProfileText = () => {
    const title = "About Me";
    const SubTitle = "自己紹介";
    return(
        <>
            <SProfileText>
                <Title title={title} subTitle={SubTitle} />
                <FadeUp>
                    <MyName />
                    <Text />
                </FadeUp>
            </SProfileText>
        </>
    )
}
