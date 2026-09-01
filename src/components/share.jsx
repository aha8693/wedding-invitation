import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, message } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { CELEBRATION_INVITATION_URL } from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  text-align: center;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const LinkShareButton = styled(Button)`
  background-color: transparent !important;
  color: var(--title-color) !important;
  font-weight: 400 !important;
  align-item: center;
  width: 100%;
  &:hover {
    background-color: rgb(184 137 196 / 18%) !important;
    border-color: rgb(184 137 196 / 34%) !important;
    color: var(--title-color) !important;
  }
`;
const Share = () => {
  return (
    <Wrapper>
      <CopyToClipboard text={CELEBRATION_INVITATION_URL}>
        <LinkShareButton
          style={{ margin: 0 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success("Invitation link copied.")}
        >
          <Title>Share This Invitation</Title>
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default Share;
