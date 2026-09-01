import React from "react";
import styled from "styled-components";
import thankYouImage from "../assets/octoberThankyou.jpg";

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

const ClosingText = styled.p`
  margin: 12px auto 0;
  width: 78%;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.8;
`;

const ThankYou = () => {
  return (
    <Wrapper>
      <Image src={thankYouImage} alt="Thank You" data-aos="fade-up" />
      <Text data-aos="fade-up">We can't wait to see you there!</Text>
      <ClosingText data-aos="fade-up">
        Please reach out to us if you have any questions or need assistance with your RSVP.
        <br />
        <br />
        Your presence means the world to us, and we are grateful for your support and love as we embark on this new chapter together.
      </ClosingText>
    </Wrapper>
  );
};

export default ThankYou;
