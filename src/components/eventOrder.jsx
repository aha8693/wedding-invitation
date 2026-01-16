import React from "react";
import styled from "styled-components";

const EventOrderWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0;
  color: var(--title-color);
  font-weight: 500;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const ScheduleSection = styled.div`
  flex: 1;
  text-align: center;
`;

const DressCodeSection = styled.div`
  flex: 1;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  opacity: 0.9;
`;

const ScheduleItem = styled.div`
  margin-bottom: 16px;
  font-size: 1.1rem;
  opacity: 0.8;
`;

const Time = styled.span`
  font-weight: bold;
  color: var(--title-color);
`;

const Activity = styled.span`
  margin-left: 8px;
`;

const DressCode = styled.div`
  font-size: 1rem;
  opacity: 0.7;
  line-height: 1.6;
`;

const EventOrder = () => {
  return (
    <EventOrderWrapper id="event-order">
      <ContentContainer>
        <ScheduleSection>
          <SectionTitle>Event Schedule</SectionTitle>
          <ScheduleItem>
            <Time>11:00 - 12:00</Time>
            <Activity>Service</Activity>
          </ScheduleItem>
          <ScheduleItem>
            <Time>12:00 - 1:00</Time>
            <Activity>Lunch</Activity>
          </ScheduleItem>
          <ScheduleItem>
            <Time>1:00 - 2:00</Time>
            <Activity>Recreational Activity</Activity>
          </ScheduleItem>
        </ScheduleSection>
        <DressCodeSection>
          <SectionTitle>Dress Code</SectionTitle>
          <DressCode>
            Casual and comfortable attire. <br /> Jeans, sweatshirts, sweatpants
            - everything is acceptable!
          </DressCode>
        </DressCodeSection>
      </ContentContainer>
    </EventOrderWrapper>
  );
};

export default EventOrder;
