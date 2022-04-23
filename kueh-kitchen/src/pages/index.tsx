import { Button } from "antd";
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
      <Nav>
        <p className="title">Our Menu</p>

        {menuData.sections.map((c) =>
          c.items.length ? <a href={`#${c.id}`}>{c.label}</a> : null
        )}
      </Nav>

      <Content>
        {menuData.sections.map((c) =>
          c.items.length ? (
            <Category id={`${c.id}`}>
              <p className="label">{c.label}</p>
              <p className="description">{c.description}</p>

              <ItemsGroup>
                {c.items.map((i) => (
                  <ItemCard>
                    <div className="header">
                      <img src={i.imageUrl} className="image"></img>
                    </div>

                    <div className="body">
                      <p className="label">{i.label}</p>
                      <p className="description">{i.description}</p>
                    </div>

                    <div className="footer">
                      <p className="price">
                        {i.currency} {i.unitPriceFractional.toFixed(2)}
                      </p>

                      <Button className="button">Add</Button>
                    </div>
                  </ItemCard>
                ))}
              </ItemsGroup>
            </Category>
          ) : null
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

const Nav = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* background: red; */

  .title {
    padding: 0;
    margin: 0;
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
    margin: 12px;
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    margin: 6px;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  /* background: yellow; */

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
  }

  @media only screen and (max-width: 767px) {
    /* phones */
  }
`;

const Category = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* background: green; */

  .label {
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    margin-top: 12px;
    margin-bottom: 6px;
  }

  .description {
    font-size: 14px;
    margin-bottom: 6px;
  }
`;

const ItemsGroup = styled.div`
  display: grid;
  /* background: violet; */
  margin-bottom: 18px;

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ItemCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* background: peachpuff; */
  align-items: center;

  border-radius: 5px;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  /* box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25); */

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
    padding: 12px;
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    padding: 6px;
    /* margin: 6px; */
  }

  .header {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .body {
    .label {
      padding: 0;
      margin: 0;
      font-weight: bold;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      margin-bottom: 12px;
    }

    .description {
      padding: 0;
      margin: 0;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      margin-bottom: 12px;
    }
  }

  .footer {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .price {
      padding: 0;
      margin: 0;
    }

    .button {
      background: var(--color-primary);
      color: var(--color-text-on-primary);
    }
  }
`;

export default IndexPage;
