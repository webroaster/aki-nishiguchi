import React from 'react';
import styled from "styled-components";
import { Title } from '../title/Title';
import { SecondaryTitle } from "../title/SecondaryTitle";

const SSection = styled.section`
    position: relative;
    background-color: #f3f4f4;
`
const SContainer = styled.div`
    width: 95%;
    max-width: 850px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 100px;
`
const STable = styled.table`
    width: 100%;
    background-color: #fff;
    border-collapse: collapse;
    margin-bottom: 50px;
    color: #212529;

    @media screen and (max-width: 520px) {
        margin-bottom: 30px;
    }

    tr {
        width: 30%;
        min-width: 300px;
        border: 1px solid #f0eded;

        td {
            text-align-last: left;
            padding: 30px;
            border: 1px solid #f0eded;
            font-weight: bold;
            font-size: 1.6rem;
            line-height: 1.5em;

            &:nth-of-type(1) {
                width: 70%;
            }

            @media screen and (max-width: 520px) {
                padding: 20px;
                font-size: 1.4rem;
            }
        }
    }
`
const SText = styled.p`
    line-height: 1.6em;
    font-size: 1.5rem;
    margin-bottom: 10px;
    letter-spacing: 0.1em;
    text-indent: -1.1em;
    padding-left: 1.1em;

    @media screen and (max-width: 520px) {
        font-size: 1.2rem;
    }
`

export const Fee = () => {
    return(
        <SSection id="fee">
            <SContainer>
                <Title title={"Fee"} subTitle={"料金について"} />
                <SecondaryTitle title={"WordPress制作"} />
                <STable>
                    <tbody>
                        <tr>
                            <td>WordPress制作｜トップページ+下層3ページ</td>
                            <td>100,000円～</td>
                        </tr>
                        <tr>
                            <td>WordPress制作｜ブログ機能あり</td>
                            <td>130,000円～</td>
                        </tr>
                        <tr>
                            <td>WordPress｜ トップページ</td>
                            <td>70,000円～</td>
                        </tr>
                    </tbody>
                </STable>
                <SecondaryTitle title={"マークアップ系（デザイン業務なし）"} />
                <STable>
                    <tbody>
                        <tr>
                            <td>HTMLコーディング｜ トップページ</td>
                            <td>25,000円～</td>
                        </tr>
                        <tr>
                            <td>コーディング｜ 下層ページ （１ページあたり）</td>
                            <td>8,000円～</td>
                        </tr>
                        <tr>
                            <td>LPコーディング</td>
                            <td>30,000円～</td>
                        </tr>
                    </tbody>
                </STable>
                <SText>
                    ※料金は実装内容によって異なるため、あくまでも目安になります。<br />
                    詳細な金額についてはご相談したいと考えております。
                </SText>
                <SText>
                    ※コーディングは基本的にレスポンシブコーディングを想定しております。<br />
                    （スマートフォンやタブレットの画面サイズに対応されたコーディングの事です。）
                </SText>
            </SContainer>
        </SSection>
    )
}
