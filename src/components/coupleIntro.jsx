import React from "react";
import { withPrefix } from "gatsby";
import styled from "styled-components";
import { Divider } from "antd";
import { BRIDE_NAME, GROOM_NAME } from "../../config";

const GroomBabyPhoto = withPrefix("/titlePicture.png");
const BrideBabyPhoto = withPrefix("/IMG_4396.webp");

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 42px;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const IntroText = styled.p`
  font-size: 0.9rem;
  color: #777;
  line-height: 1.7;
  margin: 0 0 24px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgb(255 255 255 / 65%);
  border: 1px solid #eadfdb;
  border-radius: 16px;
  padding: 14px;
`;

const Photo = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 10px;
`;

const Name = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: var(--title-color);
  font-weight: 600;
`;

const Caption = styled.p`
  margin: 6px 0 0;
  font-size: 0.82rem;
  color: #8a8a8a;
`;

const CoupleIntro = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 24 }} plain>
        <Title>우리 이야기</Title>
      </Divider>
      <IntroText>
        서로 다른 시간 속에서 자라난 두 사람이
        <br />
        이제 같은 계절을 함께 걸어가려 합니다.
      </IntroText>
      <Cards>
        <Card>
          <Photo src={GroomBabyPhoto} alt={`${GROOM_NAME} baby`} />
          <Name>{GROOM_NAME}</Name>
          <Caption>작은 손으로 큰 꿈을 꾸던 시절</Caption>
        </Card>
        <Card>
          <Photo src={BrideBabyPhoto} alt={`${BRIDE_NAME} baby`} />
          <Name>{BRIDE_NAME}</Name>
          <Caption>웃음이 먼저였던 따뜻한 아이</Caption>
        </Card>
      </Cards>
    </Wrapper>
  );
};

export default CoupleIntro;
