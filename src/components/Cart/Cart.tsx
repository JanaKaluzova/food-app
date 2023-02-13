import { Box, Modal } from "@mui/material";
import React, { useContext } from "react";
import { CartContext, CartItem } from "../../store/Cart-context";
import {
  ButtonWrapper,
  ClosingButton,
  OrderButton,
  style,
  StyledBoxOfList,
  StyledList,
  Total,
  TotalAmount,
} from "./Cart.styled";
import { CartItemComponent } from "./CartItem";

type CloseCart = {
  onClose: () => void;
};

export const Cart: React.FC<CloseCart> = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeItemHandler = (id: string) => {
    cartCtx.removeItem(id);
  };
  const addItemHandler = (item: CartItem) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <StyledBoxOfList>
      <StyledList>
        {cartCtx.items.map((item) => (
          <CartItemComponent
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)}
          />
        ))}
      </StyledList>
    </StyledBoxOfList>
  );

  return (
    <Modal
      onClose={onClose}
      open
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {cartItems}
        <Total>
          <TotalAmount id="modal-modal-title" variant="h6">
            Total Amount
          </TotalAmount>
          <TotalAmount id="modal-modal-description" variant="h6">
            {totalAmount}
          </TotalAmount>
        </Total>
        <ButtonWrapper onClick={onClose}>
          <ClosingButton>Close</ClosingButton>
          {hasItems && <OrderButton>Order</OrderButton>}
        </ButtonWrapper>
      </Box>
    </Modal>
  );
};
