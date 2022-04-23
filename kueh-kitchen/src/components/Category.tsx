import React from "react";
import styled from "styled-components";
import { TSection } from "../types/api";
import ItemCard from "./ItemCard";

type TProps = {
  category: TSection;
};

const Category = ({ category }: TProps): JSX.Element => {
  return (
    <Container id={`${category.id}`}>
      <p className="label">{category.label}</p>
      <p className="description">{category.description}</p>

      {category.disabled ? (
        <p className="disabledReason">{category.disabledReason}</p>
      ) : null}

      <ItemsGroup>
        {category.items.map((item) => (
          <ItemCard item={item} isCategoryDisabled={category.disabled} />
        ))}
      </ItemsGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

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

  .disabledReason {
    color: red;
    font-size: 14px;
    margin-bottom: 6px;
  }
`;

const ItemsGroup = styled.div`
  display: grid;
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

export default Category;
