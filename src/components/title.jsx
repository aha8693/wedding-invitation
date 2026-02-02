import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_TIME,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
const titleVideoSquare = "/wedding-invitation/titleVideoSquare.mp4";

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.p`
  font-size: 0.825rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;
const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <VideoBackground autoPlay loop muted playsInline={true}>
          <source src={titleVideoSquare} type="video/mp4" />
        </VideoBackground>
        <br /> <br />
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        {/* <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_TIME}
          <br />
          <br />
          {WEDDING_LOCATION}
        </Schedule> */}
      </TitleWrapper>
    </Layout>
  );
};

export default Title;
