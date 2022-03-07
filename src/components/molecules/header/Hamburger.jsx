import React from 'react';
import styled from "styled-components";

export const Hamburger = () => {
    const onClickHamburgerBtb = () => {
        const header = document.getElementById('header');
        const headerBtn = document.getElementById('hamburgerBtn');
        const hamburgerItem = document.getElementById('headerItem');
        header.classList.toggle('active');
        headerBtn.classList.toggle('active');
        hamburgerItem.classList.toggle('active');
    }
    return(
        <>
            <SHamburgerBtn id="hamburgerBtn" onClick={onClickHamburgerBtb}>
                <span></span><span></span><span></span>
            </SHamburgerBtn>
            <SHamburgerNav id="headerItem">
                <ul>
                    <li>
                        <a href="/#about" onClick={onClickHamburgerBtb}>ABOUT</a>
                    </li>
                    <li>
                        <a href="/#service" onClick={onClickHamburgerBtb}>SERVICE</a>
                    </li>
                    <li>
                        <a href="/#skills" onClick={onClickHamburgerBtb}>SKILLS</a>
                    </li>
                    <li>
                        <a href="/#works" onClick={onClickHamburgerBtb}>WORKS</a>
                    </li>
                    <li>
                        <a href="/#fee" onClick={onClickHamburgerBtb}>FEE</a>
                    </li>
                    <li>
                        <a href="/#contact" onClick={onClickHamburgerBtb}>CONTACT</a>
                    </li>
                </ul>
            </SHamburgerNav>
        </>
    )
}
const SHamburgerBtn = styled.button`
    display: none;
    position: relative;
    width: 20px;
    height: 10px;
    z-index: 1000;

    @media screen and (max-width:820px) {
        display: block;
    }

    & > span {
        width: 100%;
        height: 1px;
        background: #fff;
        transition: 0.2s ease-in-out;
        position: absolute;
        left: 50%;

        &:nth-of-type(1) {
            top: 0;
            transform: translateX(-50%);
        }
        &:nth-of-type(2) {
            top: 50%;
            transform: translate(-50%, -50%);
        }
        &:nth-of-type(3) {
            bottom: 0;
            transform: translateX(-50%);
        }
    }

    &.active {
        & > span {
            top: 50%;
            left: 50%;

            &:nth-of-type(1) {
                transform: translate(-50%, -50%) rotate(-30deg);
            }
            &:nth-of-type(2) {
                width: 0;
            }
            &:nth-of-type(3) {
                transform: translate(-50%, -50%) rotate(30deg);
            }
        }
    }
`
const SHamburgerNav = styled.nav`
    &#headerItem {
        display: none;
        opacity: 0;
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100vw;
        height: 100vh;
        background-color: #282F35;
        transition: 0.2s ease-in-out;

        @media screen and (max-width:820px) {
            display: block;
        }

        & > ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            & > li {
                & + li {
                    margin-top: 30px;
                    margin-left: 0;
                }
                & > a {
                    font-size: 2.4rem;
                    color: #d3d3d4;
                    font-family: 'Source Sans Pro', sans-serif;
                }
            }
        }

        &.active {
            opacity: 0.9;
            pointer-events:visible;
        }
    }
`
