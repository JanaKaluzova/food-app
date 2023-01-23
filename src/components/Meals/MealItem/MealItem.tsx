import { Box } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../../store/Cart-context";
import { Description, Header, MealsList, Price } from "./MealItem.styled";
import { MealItemForm } from "./MealItemForm";

export type Meal = {
  id: string;
  name: string;
  description?: string;
  price: number;
};

export const MealItem: React.FC<Meal> = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const priceFormatted = `$ ${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id,
      name,
      description,
      price,
      amount,
    });
  };

  return (
    <MealsList>
      <Box>
        <Header variant="h5">{name}</Header>
        <Description variant="body1">{description}</Description>
        <Price variant="body1">{priceFormatted}</Price>
      </Box>
      <Box>
        <MealItemForm label="Amount" id={id} onAddToCart={addToCartHandler} />
      </Box>
    </MealsList>
  );
};
