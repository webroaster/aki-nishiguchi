import React from 'react';
import { Footer } from '../atoms/layout/Footer';
import { Header } from "../atoms/layout/Header"

export const Layout = (props) => {
    const {children} = props;
    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
