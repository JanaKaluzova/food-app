import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import {
  ButtonWrapper,
  ClosingButton,
  OrderButton,
  StyledList,
  Total,
} from "./Cart.styled";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const Cart: React.FC = () => {
  const cartItems = (
    <StyledList>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </StyledList>
  );

  return (
    <Modal
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
        <ButtonWrapper>
          <ClosingButton>Close</ClosingButton>
          <OrderButton>Order</OrderButton>
        </ButtonWrapper>
      </Box>
    </Modal>
  );
};
