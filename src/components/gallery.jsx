import React from "react";
import { withPrefix } from "gatsby";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";
import { SectionImage, SectionTitle } from "./sectionElements";

const Flower = withPrefix("/flower3.png");

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled(SectionTitle)``;

const galleryContext = require.context(
  "../assets/galleryPhoto",
  false,
  /\.(png|jpe?g|webp)$/i,
);

const Image = styled(SectionImage)``;

const images = galleryContext
  .keys()
  .sort()
  .map((key) => {
    const asset = galleryContext(key);
    const src = asset?.default || asset;
    return {
      original: src,
      thumbnail: src,
    };
  });

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">우리의 아름다운 순간</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
