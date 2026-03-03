import styled from "styled-components";

export const SectionTitle = styled.p`
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
  font-size: 1rem;
`;

export const SectionIntroText = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0 0 24px;
  text-align: center;
`;

export const SectionImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;

  @media (max-width: 768px) {
    width: 1.25rem;
    padding-bottom: 32px;
  }

  @media (max-width: 480px) {
    width: 1.125rem;
    padding-bottom: 24px;
  }
`;
