import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_TIME,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import titlePhoto from "../assets/TitleVideo.mp4";

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
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
`;

const TitleVideo = styled.video`
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

const CalendarWrap = styled.div`
  margin: 0 auto 28px;
  max-width: 300px;
  padding: 14px 12px;
  border: 1px solid #ead9d6;
  border-radius: 14px;
  background: rgb(255 255 255 / 58%);
`;

const CalendarMonth = styled.p`
  margin: 0 0 10px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--title-color);
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`;

const Cell = styled.div`
  font-size: 0.78rem;
  color: ${({ dim }) => (dim ? "#b7aaa6" : "#7d6661")};
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: ${({ active }) => (active ? "var(--title-color)" : "transparent")};
  color: ${({ active, dim }) => (active ? "#fff" : dim ? "#b7aaa6" : "#7d6661")};
  font-weight: ${({ active }) => (active ? 700 : 500)};
`;

const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <TitleVideo src={titlePhoto} autoPlay loop muted playsInline={true}></TitleVideo>
        <br /> <br />
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_TIME}
          <br />
          <br />
          {WEDDING_LOCATION}
        </Schedule>
        <CalendarWrap>
          <CalendarMonth>MAY 2026</CalendarMonth>
          <CalendarGrid>
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <Cell key={d} dim>
                {d}
              </Cell>
            ))}
            {[...Array(5)].map((_, i) => (
              <Cell key={`e-${i}`} dim></Cell>
            ))}
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              return (
                <Cell key={day} active={day === 10}>
                  {day}
                </Cell>
              );
            })}
          </CalendarGrid>
        </CalendarWrap>
      </TitleWrapper>
    </Layout>
  );
};

export default Title;
