import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { TItem } from "../types/api";

type TProps = {
  item: TItem;
  isCategoryDisabled: boolean;
};

const ItemCard = ({ item, isCategoryDisabled }: TProps) => {
  // set card button text depending upon stock limits and category availability
  const setCardButtonText = (quantityLeft: number): string => {
    if (isCategoryDisabled) {
      return "Not Available";
    } else if (quantityLeft === 0) {
      return "Sold Out";
    } else {
      return "Add";
    }
  };

  return (
    <Container key={item.id}>
      <div className="header">
        <img src={item.imageUrl} className="image"></img>
      </div>

      <div className="body">
        <p className="label">{item.label}</p>
        <p className="description">{item.description}</p>
      </div>

      <div className="footer">
        <p className="price">
          {item.currency} {item.unitPriceFractional.toFixed(2)}
        </p>

        <Button
          className="button"
          disabled={isCategoryDisabled || item.itemStock.quantityLeft === 0}
        >
          {setCardButtonText(item.itemStock.quantityLeft)}
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
    padding: 12px;
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    padding: 6px;
  }

  .header {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-bottom: 12px;
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
    width: 100%;

    .price {
      padding: 0;
      margin: 0;
    }

    .button {
      background: var(--color-primary);
      color: var(--color-text-on-primary);
    }

    .button:disabled {
      opacity: 0.7;
    }

    @media only screen and (min-width: 768px) {
      /* tablets and desktop */
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    @media only screen and (max-width: 767px) {
      /* phones */
      flex-direction: column;
    }
  }
`;

export default ItemCard;
