import React from 'react';
import styled from "styled-components";
import { Hamburger } from '../../molecules/header/Hamburger';

const SHeader = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    padding: 30px;
    z-index: 10;
    transition: 0.2s ease-in-out;
    mix-blend-mode: difference;

    &.active {
        mix-blend-mode: normal;
    }

    .container {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & h1 {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 2.5rem;
        letter-spacing: 0.12em;
        color: #fff;
        z-index: 1000;

        @media screen and (max-width: 820px) {
            font-size: 2rem;
        }

        @media screen and (max-width: 520px) {
            font-size: 1.6rem;
        }
    }

    & nav {
        &.pc {
            @media screen and (max-width:820px) {
                display: none;
            }
        }
        ul {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            & li {

                & + li {
                    margin-left: 30px;
                }

                & > a {
                    color: #fff;
                    font-size: 1.4rem;
                    z-index: 10;
                    font-family: 'Source Sans Pro', sans-serif;
                }
            }
        }
    }
`;

export const Header = () => {
    return(
        <SHeader id="header">
            <div className="container">
                <h1>Aki Nishiguchi - Portfolio site</h1>
                <nav className="pc">
                    <ul>
                        <li>
                            <a href="/#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="/#service">SERVICE</a>
                        </li>
                        <li>
                            <a href="/#skills">SKILLS</a>
                        </li>
                        <li>
                            <a href="/#works">WORKS</a>
                        </li>
                        <li>
                            <a href="/#fee">FEE</a>
                        </li>
                        <li>
                            <a href="/#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
                <Hamburger />
            </div>
        </SHeader>
    )
}
