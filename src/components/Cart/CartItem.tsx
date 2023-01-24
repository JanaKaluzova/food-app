import { Box } from "@mui/material";
import React from "react";
import { CartItem } from "../../store/Cart-context";
import {
  Actions,
  CartItemAmount,
  CartItemButton,
  CartItemList,
  CartItemName,
  CartItemPrice,
  Summary,
} from "./CartItem.styled";

type CartItemProps = CartItem & {
  onRemove: () => void;
  onAdd: () => void;
};

export const CartItemComponent: React.FC<CartItemProps> = ({
  price,
  name,
  amount,
  onRemove,
  onAdd,
}) => {
  const priceOfItem = `$ ${price.toFixed(2)}`;

  return (
    <CartItemList>
      <Box>
        <CartItemName>{name}</CartItemName>
        <Summary>
          <CartItemPrice>{priceOfItem}</CartItemPrice>
          <CartItemAmount>x {amount}</CartItemAmount>
        </Summary>
      </Box>
      <Actions>
        <CartItemButton size="small" onClick={onRemove}>
          -
        </CartItemButton>
        <CartItemButton onClick={onAdd}>+</CartItemButton>
      </Actions>
    </CartItemList>
  );
};
