import React from "react";
import { withPrefix } from "gatsby";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
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

const GalleryFrame = styled.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;

  .image-gallery,
  .image-gallery-content,
  .image-gallery-slide-wrapper,
  .image-gallery-swipe,
  .image-gallery-slides {
    width: 100%;
    max-width: 100%;
  }

  .image-gallery-slide img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

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
        <Title data-aos="fade-up">GALLERY</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <GalleryFrame>
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        />
      </GalleryFrame>
    </Wrapper>
  );
};

export default Gallery;
