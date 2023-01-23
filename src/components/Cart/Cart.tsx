import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import {
  ButtonWrapper,
  ClosingButton,
  OrderButton,
  style,
  StyledList,
  Total,
} from "./Cart.styled";

type CloseCart = {
  onClose: () => void;
};

export const Cart: React.FC<CloseCart> = ({ onClose }) => {
  const cartItems = (
    <StyledList>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </StyledList>
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
          <Typography id="modal-modal-title" variant="h6" component="h5">
            Total Amount
          </Typography>
          <Typography id="modal-modal-description">35.62</Typography>
        </Total>
        <ButtonWrapper onClick={onClose}>
          <ClosingButton>Close</ClosingButton>
          <OrderButton>Order</OrderButton>
        </ButtonWrapper>
      </Box>
    </Modal>
  );
};
