import React from "react";
import { withPrefix } from "gatsby";
import styled from "styled-components";
import { Divider } from "antd";
import {
  SectionImage,
  SectionIntroText,
  SectionTitle,
} from "./sectionElements";
import {
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
} from "../../config";

import GroomBabyPhoto from "../assets/groomYoung.jpg";
import BrideBabyPhoto from "../assets/brideYoung.jpg";
const Flower = withPrefix("/flower2.png");

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 42px;
  text-align: center;
`;

const Title = styled(SectionTitle)``;
const IntroText = styled(SectionIntroText)``;
const Image = styled(SectionImage)``;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
  max-width: 360px;
  margin: 0 0 30px;
`;

const Card = styled.div`
  background: rgb(255 255 255 / 65%);
  border: 1px solid #eadfdb;
  border-radius: 16px;
  padding: 24px;
`;

const Photo = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NameRow = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
`;

const TitleName = styled.span`
  margin: 0;
  font-size: 0.95rem;
  color: var(--title-color);
  font-weight: 600;
  font-family: "Arial Rounded MT Bold", Arial, Helvetica, sans-serif;
`;

const Name = styled.span`
  margin: 0;
  font-size: 0.95rem;
  color: var(--title-subcolor);
  font-weight: 300;
  font-family: "Arial Rounded MT Bold", Arial, Helvetica, sans-serif;
`;

const Caption = styled.p`
  margin: 26px 0 0;
  font-size: 0.82rem;
  font-family: "Arial Rounded MT Bold", Arial, Helvetica, sans-serif;
  color: #8a8a8a;
`;

const CoupleIntro = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">우리의 이야기</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <IntroText data-aos="fade-up">
        서로 다른 시간 속에서 자라난 두 사람이
        <br />
        이제 같은 계절을 함께 걸어가려 합니다.
        <br />
      </IntroText>
      <Cards>
        <Card>
          <Photo src={GroomBabyPhoto} alt={`${GROOM_NAME} baby`} />
          <NameRow>
            <TitleName>신랑</TitleName>
            <Name>{GROOM_NAME}</Name>
          </NameRow>
          <Caption>
            {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 아들
            <br />
            1996년 12월 서울 출생
            <br />
            축구와 낚시를 좋아하는 메릴랜드 소년 🐟
          </Caption>
        </Card>
        <Card>
          <Photo src={BrideBabyPhoto} alt={`${BRIDE_NAME} baby`} />
          <NameRow>
            <TitleName>신부</TitleName>
            <Name>{BRIDE_NAME}</Name>
          </NameRow>
          <Caption>
            {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 딸
            <br />
            2000년 12월 제주 출생
            <br />
            낚시와 뜨개질을 좋아하는 제주소녀 🍊
          </Caption>
        </Card>
      </Cards>
    </Wrapper>
  );
};

export default CoupleIntro;
