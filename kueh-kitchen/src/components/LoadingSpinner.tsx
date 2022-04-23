import { Spin } from "antd";
import React from "react";
import styled from "styled-components";

const LoadingSpinner = (): JSX.Element => (
  <LoadingLayout>
    <Spin size="large" />
  </LoadingLayout>
);

const LoadingLayout = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  background: #ffffff;
  justify-content: center;
  align-items: center;
`;

export default LoadingSpinner;
