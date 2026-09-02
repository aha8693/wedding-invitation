import React from "react";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import { message } from "antd";
import {
  WEDDING_DATE,
  WEDDING_TIME,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import titlePhoto from "../assets/octoberTitleVideo.mp4";

const Layout = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding: 46px 0 34px;
  font-weight: 500 !important;
  color: var(--sage-100);
  animation: fadein 3s;
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
`;

const TitleVideo = styled.video`
  width: 100%;
`;

const HeroKicker = styled.p`
  font-size: 0.825rem;
  color: var(--forest-950);
  letter-spacing: 0.14em;
  opacity: 0.78;
  margin-bottom: 16px;
`;

const Headline = styled.h1`
  margin: 0 0 18px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: 0.02em;
  color: var(--forest-700);
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--forest-950);
  opacity: 0.96;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  color: var(--sage-200);
  line-height: 1.65;
  opacity: 0.9;
  margin-bottom: 24px;
`;

const Location = styled.p`
  font-size: 1rem;
  italic: true;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--sage-300);
  line-height: 1.65;
  opacity: 0.9;
  margin-bottom: 24px;
`;

const CopyableAddress = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.8rem;
  font-style: inherit;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: rgb(221 200 229 / 55%);
  text-underline-offset: 3px;

  &:hover {
    color: var(--lavender-soft);
  }
`;

const RsvpButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 28px;
  margin-bottom: 28px;
  border-radius: 999px;
  background: var(--lavender);
  color: var(--forest-950);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-decoration: none;
  box-shadow: 0 10px 28px rgb(0 0 0 / 28%);
  transition: transform 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    background: var(--lavender-pale);
    color: var(--forest-950);
  }
`;



const Title = () => {
  return (
    <>
      <TitleVideo
        src={titlePhoto}
        autoPlay
        loop
        muted
        playsInline={true}
      ></TitleVideo>

      <Layout>
        <TitleWrapper>
          <HeroKicker>PLEASE JOIN US FOR A</HeroKicker>
          <Headline>
            Wedding
            <br />
            Reception
          </Headline>
          <HeroKicker>to celebrate the marriage of</HeroKicker>
          <GroomBride>
            {GROOM_NAME} &#38; {BRIDE_NAME}
          </GroomBride>
          <Schedule>
            {WEDDING_DATE}
            <br />
            {WEDDING_TIME}
            <br />
          </Schedule>
          <Location>
            2941 Restaurant
            <br />
            <CopyToClipboard
              text={WEDDING_LOCATION}
              onCopy={() => message.success("Copied")}
            >
              <CopyableAddress type="button" aria-label="Copy venue address">
                {WEDDING_LOCATION}
              </CopyableAddress>
            </CopyToClipboard>
          </Location>
          <RsvpButton href="#rsvp">RSVP</RsvpButton>
        </TitleWrapper>
      </Layout>
    </>
  );
};

export default Title;
