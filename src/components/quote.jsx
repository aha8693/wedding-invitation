import React from "react";
import { withPrefix } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import momToDaughterWoff2 from "../fonts/mom_to_daughter.woff2";
import momToDaughterWoff from "../fonts/mom_to_daughter.woff";
const QuotePaper = withPrefix("/Quote.png");
const Flower = withPrefix("/flower2.png");

const QuoteFontStyle = createGlobalStyle`
  @font-face {
    font-family: "mom_to_daughter";
    src:
      url(${momToDaughterWoff2}) format("woff2"),
      url(${momToDaughterWoff}) format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  margin-bottom: 42px;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper data-aos="fade-up">
      <QuoteFontStyle />
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        "그런즉 믿음, 소망, 사랑
        <br />
        이 세 가지는 항상 있을 것인데
        <br />
        그 중에 제일은 사랑이라"
        <br />
        <br />
        고린도전서 (1Corinthians) 13:13
        <br />
        <br />
      </Content>
      <Image src={Flower} data-aos="fade-up" />
    </Wrapper>
  );
};

export default Quote;
