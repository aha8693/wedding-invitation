import React from "react";
import { withPrefix } from "gatsby";
import styled from "styled-components";
import { Divider } from "antd";

const Flower = withPrefix("/flower1.png");

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 62px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--muted);
  opacity: 0.92;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;


const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;

  @media (max-width: 768px) {
    width: 1.25rem;
    padding-bottom: 32px;
  }

  @media (max-width: 480px) {
    width: 1.125rem;
    padding-bottom: 24px;
  }
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">With Grateful Hearts</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        This October,
        <br />
        we are bringing together
        <br />
        the family and friends we love
        to give thanks, celebrate our marriage,
        <br />
        and share a joyful evening together.
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Greeting;
