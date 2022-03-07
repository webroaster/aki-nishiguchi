import React from "react"
import { Helmet } from "react-helmet";

import { About } from "../components/atoms/layout/About";
import { Contact } from "../components/atoms/layout/Contact";
import { Fee } from "../components/atoms/layout/Fee";
import { Fv } from "../components/atoms/layout/Fv";
import { Service } from "../components/atoms/layout/Service";
import { Works } from "../components/atoms/layout/Works";
import { Layout } from "../components/templates/Layout";
import "../style.css";

export default function Home() {

  return (
    <>
      <Layout>
          <Helmet>
            <html lang="ja" />
            <title>Aki Nishiguchi - Portfolio site</title>
            <meta name="description" content="Aki Nishiguchiのポートフォリオサイトです。" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@web_roaster" />
            <meta name="og:url" content="https://aki-nishiguchi.com" />
            <meta name="og:title" content="Aki Nishiguchi - Portfolio site" />
            <meta name="og:description" content="Aki Nishiguchiのポートフォリオサイトです。" />
            <meta name="og:image" content="/static/a44f14268738fd634127f1f2e43423e7/portfolio-site-top-img.png" />
            <link rel="icon" href="/static/c1afe5aa65f705034b9ca0edb354d9b7/favicon.ico" />
          </Helmet>
          <Fv />
          <About />
          <Service />
          <Works />
          <Fee />
          <Contact />
      </Layout>
    </>
  )
}
