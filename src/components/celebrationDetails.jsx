import React from "react";
import styled from "styled-components";
import { PARKING_MAP_URL } from "../../config";

const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 40px 0;
  color: var(--title-color);
  text-align: center;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
`;

const Details = styled.div`
  display: grid;
  gap: 12px;
`;

const Card = styled.section`
  padding: 22px 18px;
  border-radius: 14px;
`;

const Label = styled.h3`
  margin: 0 0 8px;
  color: var(--lavender-strong);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
`;

const Detail = styled.p`
  margin: 0;
  color: var(--forest-800);
  font-size: 0.86rem;
  line-height: 1.55;
`;

const ParkingLink = styled.a`
  display: inline-block;
  margin-top: 14px;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--lavender);
  color: var(--forest-950);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover,
  &:focus-visible {
    background: var(--lavender-pale);
    color: var(--forest-950);
    transform: translateY(-1px);
  }
`;

const CelebrationDetails = () => (
  <Wrapper aria-labelledby="celebration-details-title">
    <Title id="celebration-details-title">CELEBRATION DETAILS</Title>
    <Details>
      <Card>
        <Label>DRESS CODE</Label>
        <Detail>Lavender, green, or black/navy</Detail>
      </Card>
      <Card>
        <Label>PARKING</Label>
        <Detail>
          Please use the parking map below for the guest parking area.
        </Detail>
        <ParkingLink href={PARKING_MAP_URL} target="_blank" rel="noreferrer">
          OPEN PARKING MAP
        </ParkingLink>
      </Card>
    </Details>
  </Wrapper>
);

export default CelebrationDetails;
