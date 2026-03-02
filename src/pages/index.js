import React, { useEffect, useRef } from "react";
import { withPrefix } from "gatsby";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import CoupleIntro from "../components/coupleIntro";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import ThankYou from "../components/thankYou";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/index.css";

const GroovePaper = withPrefix("/GroovePaper.png");
const Song = withPrefix("/song.mp3");
const SITE_URL = "https://aha8693.github.io/wedding-invitation/";
const PREVIEW_IMAGE = `${SITE_URL}preview.jpg`;

const { Footer } = Layout;

const Page = styled.div`
  min-height: 100vh;
  padding: 24px 0;
  background: #f3efed;

  @media (max-width: 768px) {
    padding: 0;
    background: transparent;
  }
`;

const Wrapper = styled.div`
  background: #efebe9;
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
        <audio ref={bgmRef} src={Song} autoPlay loop preload="auto" />
        <Title />
        <Greeting />
        <CoupleIntro />
        <Gallery />
        <Location />
        <Quote />
        <CongratulatoryMoney />
        <ThankYou />
        <Share />

        <Footer
          style={{
            background: "#D7CCC8",
            backgroundImage: `url(${GroovePaper})`,
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          안혜안 +82 010-8224-8693 (신부)
        </Footer>
      </Wrapper>
    </Page>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Hyean & Seong Wedding Invitation</title>
    <meta property="og:title" content="Hyean & Seong Wedding Invitation" />
    <meta
      property="og:description"
      content="May 10, 2026 - Jeju Harris Garden"
    />
    <meta property="og:image" content={PREVIEW_IMAGE} />
    <meta property="og:url" content={SITE_URL} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Hyean & Seong Wedding Invitation" />
    <meta
      name="twitter:description"
      content="May 10, 2026 - Jeju Harris Garden"
    />
    <meta name="twitter:image" content={PREVIEW_IMAGE} />
  </>
);
