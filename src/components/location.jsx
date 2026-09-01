import React, { useEffect, useCallback } from "react";
import { withPrefix } from "gatsby";
import { Divider, message } from "antd";
import styled from "styled-components";
import { CarOutlined } from "@ant-design/icons";
import { WEDDING_TIME, WEDDING_LOCATION } from "../../config";
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

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 24px;
`;

const DetailCard = styled.div`
  padding: 16px 12px;
  background: rgb(255 255 255 / 74%);
  border: 1px solid var(--sage-200);
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 7px 20px rgb(11 27 20 / 7%);

  &:first-child {
    grid-column: 1 / -1;
    background: linear-gradient(145deg, var(--forest-800), var(--forest-900));
    border-color: rgb(184 137 196 / 34%);
  }

  &:first-child span {
    color: var(--lavender-soft);
  }

  &:first-child p {
    color: var(--sage-100);
  }
`;

const DetailLabel = styled.span`
  display: block;
  margin-bottom: 6px;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: #80548f;
`;

const DetailValue = styled.p`
  margin: 0;
  color: var(--forest-800);
  font-size: 0.82rem;
  line-height: 1.55;
`;
const Content = styled(SectionIntroText)`
  color: var(--muted);
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
  color: var(--muted);
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
  color: var(--muted);
  margin: 0;
`;

const ParkingIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1.6px solid var(--title-color);
  border-radius: 10%;
  color: var(--title-color);
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
    "Harris Garden, Glass Hall 1F, 154 Hanbuk-ro, Jeju-si, Jeju-do";

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(addressText);
      message.success("Address copied to the clipboard.");
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
      message.success("Address copied to the clipboard.");
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
        <Title data-aos="fade-up">EVENT DETAILS</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <DetailsGrid data-aos="fade-up">
        <DetailCard>
          <DetailLabel>VENUE</DetailLabel>
          <DetailValue>{WEDDING_LOCATION}</DetailValue>
        </DetailCard>
        <DetailCard>
          <DetailLabel>TIME</DetailLabel>
          <DetailValue>{WEDDING_TIME}</DetailValue>
        </DetailCard>
        <DetailCard>
          <DetailLabel>DRESS CODE</DetailLabel>
          <DetailValue>
            Dressy casual
            <br />
            Polished, comfortable attire
          </DetailValue>
        </DetailCard>
      </DetailsGrid>
      <Content data-aos="fade-up" onClick={copyAddress} title="Click to copy address">
        Harris Garden · Glass Hall, 1F
        <br />
        154 Hanbuk-ro, Jeju-si, Jeju-do
        <br />
        <br />
      </Content>
      <CopyHint>Tap the address to copy it.</CopyHint>
      <Map
        id={mapContainerId}
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>

      <SubTitle>
        <CarOutlined style={{ marginRight: 8 }} />
        BY CAR
      </SubTitle>
      <SubContent>
        Search “Harris Garden” in your navigation app.
        <br /> About 20 minutes by car from Jeju International Airport.
      </SubContent>

      <SubTitle>
        <ParkingIcon>P</ParkingIcon>
        PARKING
      </SubTitle>
      <SubContent>
        Parking attendants will be available to guide you.
      </SubContent>
    </Wrapper>
  );
};

export default Location;
