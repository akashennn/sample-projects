import React, { useContext } from "react";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import { AppContext } from "../contexts/appContext";

const IndexPage = () => {
  const { menuData } = useContext(AppContext);

  if (menuData === null) {
    return <LoadingSpinner />;
  }

  return <Container>{menuData.endDate}</Container>;
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default IndexPage;
