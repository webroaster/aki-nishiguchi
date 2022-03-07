import React,{ useEffect } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const FadeUp = (props) => {
    const {children} = props;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        setAnimation()
    }, [])
    const setAnimation = () => {
        gsap.fromTo(
            '#fadeUp',
            { opacity: 0, y: 50 }, //fromの設定
            {  //toの設定
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: '#fadeUp',
                start: 'top 75%', //要素のトップが、画面の中央まできたら開始
            },
            }
        )
    }
    return(
        <div id="fadeUp">
            {children}
        </div>
    )
}
