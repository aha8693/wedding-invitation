import React, { useEffect, useCallback } from "react";
import { withPrefix } from "gatsby";
import { Divider, message } from "antd";
import styled from "styled-components";
import { CarOutlined } from "@ant-design/icons";
import {
  SectionImage,
  SectionIntroText,
  SectionTitle,
} from "./sectionElements";

const Flower = withPrefix("/flower1.png");

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled(SectionTitle)``;
const Image = styled(SectionImage)``;
const Content = styled(SectionIntroText)`
  transition:
    transform 0.18s ease,
    color 0.18s ease,
    opacity 0.18s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }

  &:active {
    transform: scale(0.985);
  }
`;

const CopyHint = styled.p`
  font-size: 0.75rem;
  color: #9a9a9a;
  text-align: center;
  margin: 6px 0 20px;
`;

const SubTitle = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.95rem;
  color: var(--title-color);
  margin: 30px 2px 10px 0;
`;

const SubContent = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.875rem;
  color: #7a7a7a;
  margin: 0;
`;

const ParkingIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1.6px solid #d97d83;
  border-radius: 10%;
  color: #d97d83;
  font-size: 12px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1;
  margin-right: 8px;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
  overflow: hidden;
`;

const Location = () => {
  const mapContainerId = "daumRoughmapContainer1765241036938";
  const addressText =
    "제주특별자치도 제주시 한북로 154, 헤리스가든 1층 글라스홀";

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(addressText);
      message.success("주소가 클립보드에 복사되었습니다.");
    } catch (error) {
      const textArea = document.createElement("textarea");
      textArea.value = addressText;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      message.success("주소가 클립보드에 복사되었습니다.");
    }
  };

  const executeScript = useCallback(() => {
    const container = document.getElementById(mapContainerId);
    const mapWidth = container
      ? Math.min(640, Math.floor(container.clientWidth))
      : 640;

    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1765241036938",
    "key" : "dxhiafh683o",
    "mapWidth" : "${mapWidth}",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  }, [mapContainerId]);

  const installScript = useCallback(() => {
    (function () {
      const c = window.location.protocol === "https:" ? "https:" : "http:";
      const a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      const b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  }, [executeScript]);

  useEffect(() => {
    installScript();
  }, [installScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title data-aos="fade-up">오시는 길</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up" onClick={copyAddress} title="Click to copy address">
        제주특별자치도 제주시 한북로 154
        <br />
        헤리스가든 1층 글라스홀
        <br />
        <br />
      </Content>
      <CopyHint>주소를 누르면 복사됩니다.</CopyHint>
      <Map
        id={mapContainerId}
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>

      <SubTitle>
        <CarOutlined style={{ marginRight: 8 }} />
        자차
      </SubTitle>
      <SubContent>
        내비게이션: '헤리스 가든' 검색
        <br /> 제주국제공항에서 차량으로 약 20분 소요{" "}
      </SubContent>

      <SubTitle>
        <ParkingIcon>P</ParkingIcon>
        주차 안내
      </SubTitle>
      <SubContent>
        안내요원이 주차장마다 배치되어 안내 드릴 예정입니다
      </SubContent>
    </Wrapper>
  );
};

export default Location;
