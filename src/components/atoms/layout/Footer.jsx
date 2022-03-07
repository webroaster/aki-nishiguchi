import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return(
        <SFooter>
            <small>2020 Aki Nishiguchi</small>
        </SFooter>
    )
}

const SFooter = styled.footer`
    width: 100%;
    background-color: #282F35;
    padding: 30px;
    text-align: center;

    small {
        color: #fff;
        font-size: 80%;
    }
`;
