import React from 'react';
import styled from "styled-components";
import { WorksCont } from '../../molecules/works/WorksCont';
import { Title } from '../title/Title';

export const Works = () => {
    const work1 = <img src="/static/5fbb2b616b70fa507ed0af786b95c74c/works-img3.png" alt="制作一覧" />
    const work2 = <img src="/static/00a2dd0fc9bca9186b58df79c5d81bbb/works-img2.png" alt="制作一覧" />
    const work3 = <img src="/static/fc144ffaa19331f28da52f75d9d897e9/works-img1.jpg" alt="制作一覧" />
    const work4 = <img src="/static/8bee6fa4278922d839a3d5f47c67be72/works-img.jpg" alt="制作一覧" />
    const work5 = <img src="/static/de650a2304cd4317345601dc4993230f/works-img4.jpg" alt="制作一覧" />
    const work6 = <img src="/static/ec394bfd1304190d64a9bd7560e9a095/works-img5.jpg" alt="制作一覧" />
    const work7 = <img src="/static/b325710bdef3ae240fd85ae60961d56f/works-img6.jpg" alt="制作一覧" />
    const work8 = <img src="/static/6e154ebd7011da0ad1f55793910bdc1f/works-img7.jpg" alt="制作一覧" />
    const text1 = <p>デザイン・WordPress構築・内部SEO</p>;
    const text2 = <p>デザイン・WordPress構築・決済機能</p>;
    const text3 = <p>企画・デザイン・WordPress構築・内部SEO</p>;
    const text4 = <p>デザイン・WordPress構築・内部SEO・ブログ運営・ネットショップ連携</p>;
    const text5 = <p>デザイン・WordPress構築・内部SEO</p>;
    const text6 = <p>企画・デザイン・WordPress構築・内部SEO</p>;
    const text7 = <p>デザイン・WordPressオリジナルテーマ・内部SEO</p>;
    const text8 = <p>企画・デザイン・WordPressオリジナルテーマ・内部SEO・予約機能</p>;
    return(
        <SSection>
            <SContainer id="works">
                <Title title={"Works"} subTitle={"制作一覧"} />
                <SText>クリックすると実際のページに遷移します。</SText>
                <SInner>
                    <WorksCont url={"https://ryugaku-chiebukuro.com/"} worksImg={work1} title={"メディアサイト制作"} text={text1} />
                    <WorksCont url={"https://gamicome.com/"} worksImg={work2} title={"LP制作"} text={text2} />
                    <WorksCont url={"https://sgcreate1.com/"} worksImg={work3} title={"メディアサイト制作"} text={text3} />
                    <WorksCont url={"https://canoa-coffee.xyz/"} worksImg={work4} title={"自社HP・ブログ"} text={text4} />
                    <WorksCont url={"https://english-philippines.com/"} worksImg={work5} title={"オンライン英会話HP"} text={text5} />
                    <WorksCont url={"https://livecafeotodama.net/"} worksImg={work6} title={"ミュージックバーHP"} text={text6} />
                    <WorksCont url={"https://dress-maker.com/"} worksImg={work7} title={"人材募集LP"} text={text7} />
                    <WorksCont url={"https://dress-maker.com/"} worksImg={work8} title={"ミュージックスタジオHP"} text={text8} />
                    <div></div>
                </SInner>
            </SContainer>
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
        background: url(/static/7cfcdfb18e99c94d301871e9ed1f57e2/works-bgi.jpg) no-repeat center / cover;
    }
`
const SContainer = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
    z-index: 1;
`
const SInner = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & > div {
        width: calc((100% - 30px) / 3);
    }
`
const SText = styled.p`
    font-size: 1.4rem;
    color: #fff;
    letter-spacing: 0.1em;
    text-align: center;
    margin-bottom: 50px;
    mix-blend-mode: difference;
`
