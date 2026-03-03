import React from "react";
import styled from "styled-components";
import thankYouImage from "../assets/ThankYou.jpg";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 42px 0 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto 14px;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgb(0 0 0 / 45%) 12%,
    rgb(0 0 0) 20%,
    rgb(0 0 0) 80%,
    rgb(0 0 0 / 45%) 88%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgb(0 0 0 / 45%) 12%,
    rgb(0 0 0) 20%,
    rgb(0 0 0) 80%,
    rgb(0 0 0 / 45%) 88%,
    transparent 100%
  );
`;

const Text = styled.p`
  margin: 0;
  color: var(--title-color);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
`;

const ThankYou = () => {
  return (
    <Wrapper>
      <Text data-aos="fade-up">감사합니다!</Text>
      <Image src={thankYouImage} alt="Thank You" data-aos="fade-up" />
    </Wrapper>
  );
};

export default ThankYou;
