import React, { useContext } from "react";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import { AppContext } from "../contexts/appContext";

const IndexPage = () => {
  const { menuData } = useContext(AppContext);

  if (menuData === null) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <Nav>Nav</Nav>
      <Content>Content</Content>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  overflow-y: scroll;
`;

const Nav = styled.div`
  display: flex;
  flex: 1;
  background: red;
`;

const Content = styled.div`
  display: flex;
  flex: 3;
  background: yellow;
`;

export default IndexPage;
