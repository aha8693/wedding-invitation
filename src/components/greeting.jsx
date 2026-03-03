import React from "react";
import { withPrefix } from "gatsby";
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
import gookhwa from "../assets/go1.png";

const Flower = withPrefix("/flower1.png");

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 42px;
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
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  margin: 28px auto 0;
  padding: 18px 14px;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  line-height: 1.9;
  color: #7d6661;
  background: rgb(255 255 255 / 56%);
  border: 1px solid #ead9d6;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgb(133 97 89 / 10%);

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-top: 24px;
    padding: 16px 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 20px;
    padding: 14px 10px;
    line-height: 1.75;
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

const GookhwaIcon = styled.img`
  width: 1.05rem;
  vertical-align: middle;
  margin-right: 6px;
  transform: translateY(-1px);
  opacity: 0.9;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
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
      <GroomBride data-aos="fade-up">
        <GookhwaIcon src={gookhwa} alt="Flower" />
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
