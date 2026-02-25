import React, { useEffect } from "react";
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
import EventOrder from "../components/eventOrder";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/index.css";

const GroovePaper = withPrefix("/GroovePaper.png");

// markup
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

  return (
    <Page>
      <Wrapper>
        <Title />
        <Greeting />
        <CoupleIntro />
        <Gallery />
        <Location />
        <Quote />
        <CongratulatoryMoney />
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
