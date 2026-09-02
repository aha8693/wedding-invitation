import React, { useEffect, useRef } from "react";
import { withPrefix } from "gatsby";
import { Layout } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import Greeting from "../components/greeting";
import Title from "../components/title";
import Gallery from "../components/gallery";
import Rsvp from "../components/rsvp";
import Share from "../components/share";
import ThankYou from "../components/thankYou";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/index.css";

const GroovePaper = withPrefix("/GroovePaper.png");
const Song = withPrefix("/Nop.mp3");
const SITE_URL = "https://aha8693.github.io/wedding-invitation/";
const PREVIEW_IMAGE = `${SITE_URL}preview.jpg`;
const ICON = `${SITE_URL}flower1.png`;

const { Footer } = Layout;

const Page = styled.div`
  min-height: 100vh;
  padding: 24px 0;
  background: hsl(0, 0%, 99%);

  @media (max-width: 768px) {
    padding: 0;
    background: transparent;
  }
`;

const Wrapper = styled.div`
  background: var(--paper);
  background-image: url(${GroovePaper});
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  overflow-x: hidden;
  box-shadow: 0 12px 40px rgb(0 0 0 / 14%);

  @media (max-width: 768px) {
    max-width: none;
    box-shadow: none;
  }
`;

const IndexPage = () => {
  const bgmRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  useEffect(() => {
    const audio = bgmRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const tryPlay = () => {
      audio.play().catch(() => {});
    };

    tryPlay();

    const unlockAudio = () => {
      tryPlay();
    };

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  return (
    <Page>
      <Wrapper>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption -- Background music has no spoken content. */}
        <audio ref={bgmRef} src={Song} autoPlay loop preload="auto" />
        <Title />
        <Greeting />
        <Gallery />
        <Rsvp />
        <ThankYou />
      </Wrapper>
    </Page>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <link rel="icon" type="image/x-icon" href={ICON} />
    <title>Seong &amp; Hyean</title>
    <meta property="og:title" content="Seong & Hyean" />
    <meta property="og:description" content="October 10, 2026" />
    <meta property="og:image" content={PREVIEW_IMAGE} />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Seong & Hyean" />
    <meta name="twitter:description" content="October 10, 2026" />
    <meta name="twitter:image" content={PREVIEW_IMAGE} />
  </>
);
