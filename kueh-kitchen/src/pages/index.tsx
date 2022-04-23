import { Button } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import Category from "../components/Category";
import ItemCard from "../components/ItemCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Nav from "../components/Nav";
import { AppContext } from "../contexts/appContext";

const IndexPage = () => {
  // get data from ctx
  const { menuData } = useContext(AppContext);

  // loading and error state
  if (menuData === null) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <Nav menuData={menuData} />

      <Content>
        {menuData.sections.map((category) =>
          category.items.length ? <Category category={category} /> : null
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  overflow-y: scroll;

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
    flex-direction: row;
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    margin: 6px;
  }
`;

export default IndexPage;
