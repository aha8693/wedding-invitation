import React from "react";
import styled from "styled-components";
import { WEDDING_LOCATION, WEDDING_TIME } from "../../config";

const EventOrderWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0;
  color: var(--title-color);
  font-weight: 500;
`;

const ContentContainer = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 24px;
  opacity: 0.9;
  letter-spacing: 0.05em;
`;

const Section = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 24px;
  opacity: 0.9;
  letter-spacing: 0.05em;
`;

const DressCode = styled.div`
  padding: 18px 14px;
  border-radius: 14px;
  color: var(--sage-100);
  margin-bottom: 28px;

  & strong {
    color: var(--lavender-strong);
    font-size: 0.8rem;
    letter-spacing: 0.12em;
  }
`;

const EventOrder = () => {
  return (
    <EventOrderWrapper id="event-order">
      <ContentContainer>
        <SectionTitle>EVENT ORDER &amp; DETAILS</SectionTitle>
        <Section>
          - Service <br />
          - Photo Time
          <br />
          - Lunch &amp; Fellowship
          <br />
        </Section>

        <DressCode>
          <strong>DRESS CODE</strong>
          <br />
          Lavender, Green, or Black/Navy
        </DressCode>
      </ContentContainer>
    </EventOrderWrapper>
  );
};

export default EventOrder;
