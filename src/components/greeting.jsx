import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
const Flower = "/wedding-invitation/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0 auto;
  width: 70%;

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

const Title = styled.p`
  font-size: 0.95rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Content = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 12px;
  }
`;

const GroomBride = styled.p`
  padding-top: 42px;
  font-size: 1.2rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-top: 32px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding-top: 24px;
    line-height: 1.6;
  }
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

const ScrollButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 12px 24px;
  background-color: var(--title-color);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #c26b6f;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 10px 20px;
  }
`;

const Greeting = () => {
  const scrollToEventOrder = () => {
    const element = document.getElementById("event-order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        하나님의 때에 서로 만난 두 사람이
        <br />
        은혜로 결실을 맺게 되었습니다.
        <br />
        <br />
        둘이 하나가 되어 평생 서로를
        <br />
        돕는 배필로 서약하는 자리에
        <br /> <br />
        기도와 축복으로 함께 해주신다면
        <br />
        더 없는 감사와 기쁨으로 간직하겠습니다.
        <br />
        <br />
      </Content>
      <ScrollButton onClick={scrollToEventOrder} data-aos="fade-up">
        View Event Schedule
      </ScrollButton>
      {/* <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </GroomBride> */}
    </Wrapper>
  );
};

export default Greeting;
