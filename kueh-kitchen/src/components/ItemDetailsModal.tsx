import { Button, InputNumber, Modal, notification } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { TItem } from "../types/api";

type TProps = {
  item: TItem;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

const ItemDetailsModal = ({
  item,
  isVisible,
  setIsVisible,
}: TProps): JSX.Element => {
  // save qty
  const [qty, setQty] = useState(1);

  // fn
  const onAddToCart = () => {
    // show notification
    notification.success({
      message: "Item added!",
      description: "Please visit cart to complete the order!",
      placement: "bottomLeft",
    });

    // reset qty
    setQty(1);

    // close model
    setIsVisible(false);
  };

  const onCancel = () => {
    // reset qty
    setQty(1);

    // close model
    setIsVisible(false);
  };

  return (
    <Modal width="75vw" footer={null} visible={isVisible} onCancel={onCancel}>
      <Container>
        <div className="header">
          <img alt="item image" src={item.imageUrl} className="image"></img>
        </div>

        <div className="body">
          <p className="label">{item.label}</p>
          <p className="description">{item.description}</p>

          <div className="footer">
            <InputNumber
              className="qty"
              min={1}
              max={10}
              value={qty}
              onChange={(qty) => setQty(qty)}
            />

            <Button className="button" onClick={onAddToCart}>
              Add (${item.currency}
              {(item.unitPriceFractional * qty).toFixed(2)})
            </Button>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;

  .header {
    flex: 1;
    display: flex;

    .image {
      width: 500px;
      object-fit: contain;
    }
  }

  .body {
    flex: 1;
    display: flex;
    flex-direction: column;

    .label {
      font-size: 16px;
      line-height: 18px;
      font-weight: bold;
    }

    .description {
      flex: 1;
      display: flex;
    }
  }

  .footer {
    display: flex;

    .qty {
      margin-right: 6px;
    }

    .button {
      width: 100%;
      background: var(--color-primary);
      color: var(--color-text-on-primary);
    }
  }

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    flex-direction: column;

    .image {
      width: 100% !important;
    }

    .footer {
      .qty {
        margin-bottom: 12px;
        width: 100%;
      }

      flex-direction: column;
    }
  }
`;

export default ItemDetailsModal;
