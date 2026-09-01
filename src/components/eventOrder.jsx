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

const ScheduleSection = styled.div`
  width: 100%;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 24px;
  opacity: 0.9;
  letter-spacing: 0.05em;
`;

const Section = styled.h2`
  font-size: .8rem;
  margin-bottom: 24px;
  opacity: 0.9;
  letter-spacing: 0.05em;
`;

const ScheduleItem = styled.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 14px;
  align-items: center;
  padding: 17px 18px;
  margin-bottom: 12px;
  border-radius: 14px;
  box-shadow: 0 7px 20px rgb(11 27 20 / 7%);
`;

const Time = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--lavender);
  color: var(--forest-950);
  font-size: 0.72rem;
  font-weight: 700;
`;

const Activity = styled.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: left;
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.45;

  & strong {
    color: var(--forest-800);
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 4px;
`;

const DetailCard = styled.div`
  padding: 16px 12px;
  background: rgb(255 255 255 / 72%);
  border-radius: 14px;
  text-align: center;
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
  font-size: 0.8rem;
  line-height: 1.55;
`;

const DressCode = styled.div`
  padding: 18px 14px;
  border-radius: 14px;
  color: var(--sage-100);

  & strong {
    color: var(--lavender-soft);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
  }
`;

const EventOrder = () => {
  return (
    <EventOrderWrapper id="event-order">
      <ContentContainer>
          <SectionTitle>EVENT ORDER &amp; DETAILS</SectionTitle>
          <Section>- Service <br />
            - Photo Time<br />
            - Lunch &amp; Fellowship<br />
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
