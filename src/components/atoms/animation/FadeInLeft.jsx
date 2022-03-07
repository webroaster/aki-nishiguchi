import React,{ useEffect } from 'react';
import styled from "styled-components";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const FadeInLeft = (props) => {
    const {children} = props;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        setAnimation()
    }, [])
    const setAnimation = () => {
        gsap.fromTo(
            '#fadeLeft',
            { opacity: 0, x: -50 }, //fromの設定
            {  //toの設定
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: '#fadeLeft',
                start: 'top 75%', //要素のトップが、画面の中央まできたら開始
            },
            }
        )
    }
    return(
        <SWrap id="fadeLeft">
            {children}
        </SWrap>
    )
}
const SWrap = styled.div`
    width: 48%;
    @media screen and (max-width: 520px) {
        width: 100%;
    }
`
